// Dev helper: screenshots key pages in light and dark into .screens/ (needs `npm run docs:preview` running).
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const game = resolve(process.env.TETRE_GAME_DIR ?? join(here, '..', '..'));
const { chromium } = createRequire(join(game, 'package.json'))('@playwright/test');
const base = 'http://localhost:4173/tetre-docs';
const pages = { home: '/', silas: '/characters/silas', combat: '/systems/combat', spoilers: '/spoilers/', art: '/art/', cast: '/characters/' };
const browser = await chromium.launch();
for (const scheme of ['light', 'dark']) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, colorScheme: scheme });
  const page = await ctx.newPage();
  for (const [name, path] of Object.entries(pages)) {
    await page.goto(base + path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    await page.screenshot({ path: join(here, '..', '.screens', `${name}-${scheme}.png`), fullPage: name === 'home' || name === 'art' });
  }
  await ctx.close();
}
await browser.close();
