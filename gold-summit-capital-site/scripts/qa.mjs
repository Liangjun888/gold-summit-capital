import { createServer } from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const qaDir = join(root, "qa");
const port = 4273;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function resolvePath(url) {
  const parsed = new URL(url, `http://127.0.0.1:${port}`);
  let pathname = decodeURIComponent(parsed.pathname);
  if (pathname === "/") pathname = "/zh-CN/";
  if (pathname.endsWith("/")) pathname += "index.html";
  const fullPath = normalize(join(dist, pathname));
  if (!fullPath.startsWith(dist)) return null;
  return fullPath;
}

function createStaticServer() {
  return createServer((request, response) => {
    const fullPath = resolvePath(request.url || "/");
    const filePath = fullPath && existsSync(fullPath) ? fullPath : join(dist, "404.html");
    const status = existsSync(filePath) && filePath === fullPath ? 200 : 404;
    const body = readFileSync(filePath);
    response.writeHead(status, { "Content-Type": types[extname(filePath)] || "application/octet-stream" });
    response.end(body);
  });
}

async function collectMetrics(page) {
  return page.evaluate(() => ({
    title: document.title,
    h1: document.querySelector("h1")?.textContent,
    forms: document.querySelectorAll("form").length,
    passwordInputs: document.querySelectorAll('input[type="password"]').length,
    horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    images: [...document.images].map((img) => ({
      src: img.getAttribute("src"),
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
    })),
  }));
}

await mkdir(qaDir, { recursive: true });

const server = createStaticServer();
await new Promise((resolve) => server.listen(port, "127.0.0.1", resolve));

let browser;
try {
  browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  });

  const desktop = await browser.newPage({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });
  await desktop.goto(`http://127.0.0.1:${port}/zh-CN/`, { waitUntil: "networkidle" });
  const desktopMetrics = await collectMetrics(desktop);
  await desktop.screenshot({ path: join(qaDir, "desktop-home.png"), fullPage: true });

  const mobile = await browser.newPage({
    viewport: { width: 390, height: 900 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  await mobile.goto(`http://127.0.0.1:${port}/zh-CN/`, { waitUntil: "networkidle" });
  const mobileMetrics = await collectMetrics(mobile);
  mobileMetrics.menuButtonVisible = await mobile.evaluate(() => {
    const button = document.querySelector(".menu-toggle");
    return !!button && getComputedStyle(button).display !== "none";
  });
  await mobile.screenshot({ path: join(qaDir, "mobile-home.png"), fullPage: true });

  await mobile.goto(`http://127.0.0.1:${port}/zh-CN/client-portal/`, { waitUntil: "networkidle" });
  const portalMetrics = await collectMetrics(mobile);
  portalMetrics.hasInvitationCopy = await mobile.evaluate(() =>
    document.body.textContent.includes("仅向受邀客户开放"),
  );
  await mobile.screenshot({ path: join(qaDir, "mobile-client-portal.png"), fullPage: true });

  const result = {
    desktopMetrics,
    mobileMetrics,
    portalMetrics,
    screenshots: ["qa/desktop-home.png", "qa/mobile-home.png", "qa/mobile-client-portal.png"],
  };

  console.log(JSON.stringify(result, null, 2));
} finally {
  if (browser) await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
