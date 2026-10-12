import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

function createPng(width, height, drawFn) {
  // RGBA buffer
  const rgba = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const [r, g, b, a] = drawFn(x, y, width, height);
      rgba[idx] = r;
      rgba[idx + 1] = g;
      rgba[idx + 2] = b;
      rgba[idx + 3] = a;
    }
  }

  // Raw image data with filter byte (0) before each row
  const rowBytes = width * 4;
  const rawData = Buffer.alloc(height * (rowBytes + 1));
  for (let y = 0; y < height; y++) {
    rawData[y * (rowBytes + 1)] = 0; // Filter None
    rgba.copy(rawData, y * (rowBytes + 1) + 1, y * rowBytes, (y + 1) * rowBytes);
  }

  const deflated = zlib.deflateSync(rawData);

  // PNG header
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);
    const crc = crc32(Buffer.concat([typeBuf, data]));
    crcBuf.writeUInt32BE(crc >>> 0, 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8-bit depth
  ihdr[9] = 6; // RGBA color type
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const ihdrChunk = chunk('IHDR', ihdr);
  const idatChunk = chunk('IDAT', deflated);
  const iendChunk = chunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Simple CRC32 table
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) c = 0xedb88320 ^ (c >>> 1);
    else c = c >>> 1;
  }
  crcTable[n] = c;
}
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return c ^ 0xffffffff;
}

// Icon Drawer: Sleek Dark Background with Tech Monogram & Indigo/Cyan Glow
function drawIcon(x, y, w, h) {
  const cx = w / 2;
  const cy = h / 2;
  const radius = w * 0.45;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Rounded rectangle bounds
  const margin = w * 0.08;
  const inBox = x >= margin && x <= w - margin && y >= margin && y <= h - margin;
  
  // Background gradient from dark slate #0f172a to deep navy #020617
  const t = (x + y) / (w + h);
  let r = Math.round(15 * (1 - t) + 2 * t);
  let g = Math.round(23 * (1 - t) + 6 * t);
  let b = Math.round(42 * (1 - t) + 23 * t);
  let a = 255;

  // Add subtle border glow
  const rx = Math.max(Math.abs(dx) - (cx - margin * 1.5), 0);
  const ry = Math.max(Math.abs(dy) - (cy - margin * 1.5), 0);
  const cornerDist = Math.sqrt(rx * rx + ry * ry);
  if (cornerDist > margin * 0.8) {
    a = 0; // Rounded corner transparency for maskable or standard icon
  } else if (cornerDist > margin * 0.7) {
    // border highlight (cyan #38bdf8)
    r = 56; g = 189; b = 248;
  }

  // Code bracket symbol inside `< / >`
  // Left bracket: (x between 25% and 38%, y between 35% and 65%)
  const nx = x / w;
  const ny = y / h;

  // Left bracket <
  const dLeft1 = Math.abs((ny - 0.5) - (nx - 0.35) * 1.5);
  const dLeft2 = Math.abs((ny - 0.5) + (nx - 0.35) * 1.5);
  const onLeftBracket = nx >= 0.22 && nx <= 0.38 && ny >= 0.35 && ny <= 0.65 && (
    (ny <= 0.5 && Math.abs(ny - 0.5 + (nx - 0.24) * 1.8) < 0.035) ||
    (ny > 0.5 && Math.abs(ny - 0.5 - (nx - 0.24) * 1.8) < 0.035)
  );

  // Right bracket >
  const onRightBracket = nx >= 0.62 && nx <= 0.78 && ny >= 0.35 && ny <= 0.65 && (
    (ny <= 0.5 && Math.abs(ny - 0.5 + (0.76 - nx) * 1.8) < 0.035) ||
    (ny > 0.5 && Math.abs(ny - 0.5 - (0.76 - nx) * 1.8) < 0.035)
  );

  // Slash /
  const onSlash = Math.abs((nx - 0.5) + (ny - 0.5) * 0.45) < 0.025 && ny >= 0.32 && ny <= 0.68;

  if (a > 0 && (onLeftBracket || onRightBracket)) {
    // Cyan #38bdf8
    r = 56; g = 189; b = 248;
  } else if (a > 0 && onSlash) {
    // Indigo #818cf8
    r = 129; g = 140; b = 248;
  }

  return [r, g, b, a];
}

const outDir = path.resolve('public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'pwa-192x192.png'), createPng(192, 192, drawIcon));
fs.writeFileSync(path.join(outDir, 'pwa-512x512.png'), createPng(512, 512, drawIcon));
fs.writeFileSync(path.join(outDir, 'apple-touch-icon.png'), createPng(180, 180, drawIcon));
fs.writeFileSync(path.join(outDir, 'og-image.png'), createPng(600, 315, (x, y, w, h) => {
  // Rich preview card
  const t = x / w;
  const r = Math.round(15 + 10 * t);
  const g = Math.round(23 + 20 * t);
  const b = Math.round(42 + 40 * t);
  return [r, g, b, 255];
}));

console.log('Successfully generated PWA and social preview PNG icons!');
