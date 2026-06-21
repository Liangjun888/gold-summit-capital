import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { site } from "../src/content/site-data.mjs";
import { renderNotFound, renderPage } from "../src/lib/render.mjs";
import { generateAssets } from "./generate-assets.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const basePath = (site.basePath || "").replace(/\/$/, "");
const homePath = `${basePath}/zh-CN/`;

function outputPathForRoute(route) {
  const clean = route.replace(/^\/+/, "");
  const target = clean.endsWith("/") ? `${clean}index.html` : `${clean}/index.html`;
  return join(dist, target);
}

async function writeRoute(route, html) {
  const outputPath = outputPathForRoute(route);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, "utf8");
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await mkdir(join(dist, "styles"), { recursive: true });
await mkdir(join(dist, "scripts"), { recursive: true });

await cp(join(root, "src", "styles", "main.css"), join(dist, "styles", "main.css"));
await cp(join(root, "src", "scripts", "main.js"), join(dist, "scripts", "main.js"));
await generateAssets(join(dist, "assets"));

for (const page of site.pages) {
  await writeRoute(page.path, renderPage(site, page));
}

await writeFile(join(dist, "404.html"), renderNotFound(site), "utf8");
await writeFile(
  join(dist, "index.html"),
  `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=${homePath}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gold Summit Capital</title>
    <link rel="canonical" href="${homePath}">
  </head>
  <body>
    <p><a href="${homePath}">进入 Gold Summit Capital 官网</a></p>
  </body>
</html>
`,
  "utf8",
);
await writeFile(join(dist, ".nojekyll"), "", "utf8");
await writeFile(join(dist, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n", "utf8");
await writeFile(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${site.pages
  .map((page) => `  <url><loc>${site.baseUrl}${page.path}</loc></url>`)
  .join("\n")}
</urlset>
`,
  "utf8",
);

console.log(`Built ${site.pages.length} pages to ${dist}`);
