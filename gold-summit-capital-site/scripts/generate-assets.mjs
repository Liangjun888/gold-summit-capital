import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { deflateSync } from "node:zlib";

const crcTable = new Uint32Array(256).map((_, index) => {
  let c = index;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(buffer) {
  let c = 0xffffffff;
  for (const byte of buffer) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  const crc = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function png(width, height, paint) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  let offset = 0;

  for (let y = 0; y < height; y += 1) {
    raw[offset] = 0;
    offset += 1;
    for (let x = 0; x < width; x += 1) {
      const [r, g, b, a = 255] = paint(x, y, width, height);
      raw[offset] = r;
      raw[offset + 1] = g;
      raw[offset + 2] = b;
      raw[offset + 3] = a;
      offset += 4;
    }
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function noise(x, y, seed) {
  const value = Math.sin(x * 12.9898 + y * 78.233 + seed * 37.719) * 43758.5453;
  return value - Math.floor(value);
}

function mix(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function blend(c1, c2, t) {
  return [mix(c1[0], c2[0], t), mix(c1[1], c2[1], t), mix(c1[2], c2[2], t), 255];
}

function inRect(x, y, left, top, width, height) {
  return x >= left && x < left + width && y >= top && y < top + height;
}

function heroResearch() {
  const ivory = [238, 230, 216];
  const stone = [199, 188, 170];
  const umber = [54, 43, 36];
  const bronze = [155, 122, 82];
  const sage = [124, 133, 119];

  return png(1200, 1500, (x, y, w, h) => {
    let color = blend(ivory, stone, y / h);
    const grain = (noise(x, y, 3) - 0.5) * 18;
    color = [color[0] + grain, color[1] + grain, color[2] + grain, 255].map((v, i) =>
      i === 3 ? 255 : Math.max(0, Math.min(255, Math.round(v))),
    );

    if (inRect(x, y, 0, 0, w, 210)) color = blend(color, umber, 0.68);
    if (inRect(x, y, 92, 284, 420, 565)) color = blend(color, [250, 247, 240], 0.62);
    if (inRect(x, y, 626, 210, 360, 930)) color = blend(color, umber, 0.22);
    if (inRect(x, y, 740, 306, 138, 644)) color = blend(color, sage, 0.18);
    if (Math.abs(x - 600) < 3 || Math.abs(x - 996) < 2) color = blend(color, bronze, 0.55);
    if (y > 1040 && y < 1050) color = blend(color, umber, 0.48);
    if (inRect(x, y, 165, 392, 290, 14) || inRect(x, y, 165, 462, 245, 10)) {
      color = blend(color, bronze, 0.65);
    }
    if (inRect(x, y, 705, 1180, 360, 54)) color = blend(color, umber, 0.48);
    return color;
  });
}

export async function generateAssets(outputDir) {
  await mkdir(outputDir, { recursive: true });
  await writeFile(join(outputDir, "hero-research.png"), heroResearch());
}
