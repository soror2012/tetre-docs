#!/usr/bin/env node
// Renders the character portraits and sprites from the game's art gallery into docs/public/img/portraits/.
// Needs the (private) game repo checked out next to this folder, or set TETRE_GAME_DIR.
// Usage: node scripts/portraits.mjs
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const game = resolve(process.env.TETRE_GAME_DIR ?? join(here, '..', '..'));
const out = join(here, '..', 'docs', 'public', 'img', 'portraits');
const require = createRequire(join(game, 'package.json'));
const { chromium } = require('@playwright/test');

const PORT = 5199;
const vite = spawn('npx', ['vite', '--port', String(PORT), '--strictPort'], { cwd: game, stdio: 'pipe', detached: true });
await new Promise((res, rej) => {
  const t = setTimeout(() => rej(new Error('vite did not start')), 30000);
  vite.stdout.on('data', (d) => { if (String(d).includes('Local')) { clearTimeout(t); res(); } });
});

try {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/gallery.html`);
  await page.waitForSelector('#gallery canvas');
  const wanted = ['silas', 'lorena', 'vulcan', 'hugh', 'wing', 'skyler', 'professor'];
  mkdirSync(out, { recursive: true });
  for (const name of wanted) {
    for (const family of ['portrait', 'sprite']) {
      const url = await page.evaluate(({ key, family }) => {
        for (const item of document.querySelectorAll('#gallery .item')) {
          const label = item.lastElementChild?.textContent ?? '';
          if (label.startsWith(`${family}:${key} `)) {
            const src = item.querySelector('canvas');
            const k = family === 'portrait' ? 4 : 6;
            // Sprite sheets are 4 directions x 3 frames of 16x24; take the front-facing idle frame.
            const [sx, sy, sw, sh] = family === 'portrait' ? [0, 0, src.width, src.height] : [16, 0, 16, 24];
            const c = document.createElement('canvas');
            c.width = sw * k; c.height = sh * k;
            const ctx = c.getContext('2d'); ctx.imageSmoothingEnabled = false;
            ctx.drawImage(src, sx, sy, sw, sh, 0, 0, c.width, c.height);
            return c.toDataURL('image/png');
          }
        }
        return null;
      }, { key: name, family });
      if (url) {
        writeFileSync(join(out, `${name}-${family}.png`), Buffer.from(url.split(',')[1], 'base64'));
        console.log('wrote', `${name}-${family}.png`);
      } else console.log('missing', family, name);
    }
  }
  // Enemy battlers (single-frame sprites, drawn at 4x).
  for (const name of ['practice_automaton', 'vulture_trooper', 'vulture_engineer', 'vulture_breacher']) {
    const url = await page.evaluate((key) => {
      for (const item of document.querySelectorAll('#gallery .item')) {
        if ((item.lastElementChild?.textContent ?? '').startsWith(`battler:${key} `)) {
          const src = item.querySelector('canvas');
          const c = document.createElement('canvas');
          c.width = src.width * 4; c.height = src.height * 4;
          const ctx = c.getContext('2d'); ctx.imageSmoothingEnabled = false;
          ctx.drawImage(src, 0, 0, c.width, c.height);
          return c.toDataURL('image/png');
        }
      }
      return null;
    }, name);
    if (url) { writeFileSync(join(out, `${name}-battler.png`), Buffer.from(url.split(',')[1], 'base64')); console.log('wrote', `${name}-battler.png`); }
    else console.log('missing battler', name);
  }
  await browser.close();
} finally {
  try { process.kill(-vite.pid); } catch {}
  process.exit(0);
}
