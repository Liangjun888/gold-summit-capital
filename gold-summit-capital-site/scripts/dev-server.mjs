import { createServer } from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function resolvePath(url) {
  const parsed = new URL(url, `http://localhost:${port}`);
  let pathname = decodeURIComponent(parsed.pathname);

  if (pathname === "/") pathname = "/zh-CN/";
  if (pathname.endsWith("/")) pathname += "index.html";

  const fullPath = normalize(join(dist, pathname));
  if (!fullPath.startsWith(dist)) return null;
  return fullPath;
}

const server = createServer((request, response) => {
  const fullPath = resolvePath(request.url || "/");
  const filePath = fullPath && existsSync(fullPath) ? fullPath : join(dist, "404.html");
  const status = existsSync(filePath) && filePath === fullPath ? 200 : 404;
  const body = readFileSync(filePath);
  response.writeHead(status, { "Content-Type": types[extname(filePath)] || "application/octet-stream" });
  response.end(body);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Gold Summit Capital site running at http://127.0.0.1:${port}/zh-CN/`);
});
