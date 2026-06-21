import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import test from "node:test";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const contentPath = join(root, "src", "content", "site-data.mjs");
const distRoot = join(root, "dist");

function readFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) return readFiles(fullPath);
    return [fullPath];
  });
}

test("defines the approved public V1 route map", async () => {
  assert.equal(existsSync(contentPath), true, "src/content/site-data.mjs should exist");

  const { site } = await import(`${pathToFileURL(contentPath).href}?cache=${Date.now()}`);
  const routes = site.pages.map((page) => page.path);

  assert.deepEqual(routes, [
    "/zh-CN/",
    "/zh-CN/about/",
    "/zh-CN/approach/",
    "/zh-CN/team/",
    "/zh-CN/client-portal/",
  ]);
});

test("rendered pages support a GitHub Pages project path prefix", async () => {
  const { site } = await import(`${pathToFileURL(contentPath).href}?cache=${Date.now()}`);
  const { renderPage } = await import(
    `${pathToFileURL(join(root, "src", "lib", "render.mjs")).href}?cache=${Date.now()}`
  );

  const githubPagesSite = { ...site, basePath: "/gold-summit-capital-site" };
  const html = renderPage(githubPagesSite, site.pages[0]);

  assert.match(html, /href="\/gold-summit-capital-site\/styles\/main\.css"/);
  assert.match(html, /src="\/gold-summit-capital-site\/scripts\/main\.js"/);
  assert.match(html, /href="\/gold-summit-capital-site\/zh-CN\/about\/"/);
  assert.match(html, /src="\/gold-summit-capital-site\/assets\/hero-research\.png"/);
  assert.doesNotMatch(html, /href="\/zh-CN\/about\/"/);
});

test("public source copy avoids sensitive performance and fund terms", () => {
  const sourceFiles = readFiles(join(root, "src")).filter((file) =>
    /\.(mjs|js|css|html|astro)$/.test(file),
  );

  assert.ok(sourceFiles.length > 0, "source files should exist");

  const bannedTerms = [
    "8%-12%",
    "8% - 12%",
    "年化目标",
    "历史业绩",
    "收益目标",
    "起投金额",
    "管理费",
    "业绩分成",
    "锁定期",
    "申购",
    "赎回",
    "具体持仓",
  ];

  const violations = [];
  for (const file of sourceFiles) {
    const body = readFileSync(file, "utf8");
    for (const term of bannedTerms) {
      if (body.includes(term)) {
        violations.push(`${relative(root, file)} contains ${term}`);
      }
    }
  }

  assert.deepEqual(violations, []);
});

test("client portal page is invitation-only and does not fake login", () => {
  const portalPath = join(distRoot, "zh-CN", "client-portal", "index.html");

  assert.equal(existsSync(portalPath), true, "client portal page should be built");

  const html = readFileSync(portalPath, "utf8");
  assert.match(html, /仅向受邀客户开放/);
  assert.doesNotMatch(html, /<form\b/i);
  assert.doesNotMatch(html, /type=["']password["']/i);
  assert.doesNotMatch(html, /注册|找回密码/);
});
