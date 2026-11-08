# Tetre Docs

Public documentation for **Tetre**, an original 2D JRPG: the world, characters, game systems, art direction and development status. Built with [VitePress](https://vitepress.dev) 1.6.4 and published with GitHub Pages at `https://soror2012.github.io/tetre-docs/`.

## Spoiler policy

Every page outside `docs/spoilers/` is spoiler-safe and describes the world as a player would understand it early on. All story twists live only in **docs/spoilers/** (the "⚠ Spoilers / Design Bible" sidebar group). Each page there carries `spoiler: true` in its front matter, which shows a warning banner and tints the page. Keep it that way: never put a twist in a normal page.

## Run it

```bash
npm install
npm run docs:dev       # live-reloading dev server
npm run docs:build     # production build into docs/.vitepress/dist
npm run docs:preview   # serve the production build on http://localhost:4173/tetre-docs/
```

The site uses `base: '/tetre-docs/'`, so every URL carries that prefix. In pages, use a markdown image (`![](/img/x.png)`) or the `<Pic src="/img/x.png" />` component for images, never a raw `<img>`.

## Layout

```
docs/
  index.md               home
  world/ nations/ characters/ systems/ art/ dev/
  spoilers/              gated section (front matter: spoiler: true)
  glossary.md
  public/img/            screenshots and portraits (copied, never linked into the game repo)
  .vitepress/
    config.mts           nav, sidebar, base
    theme/               palette CSS, SpoilerBanner, Swatches, Pic
scripts/portraits.mjs    re-renders character portraits from the game's art gallery
.github/workflows/deploy.yml
```

## Regenerate portraits (optional, needs the private game repo)

```bash
# the game repo must be the parent folder, or set TETRE_GAME_DIR
node scripts/portraits.mjs
```

This starts the game's Vite server, screenshots each portrait and sprite from `gallery.html` with Playwright and writes 4x (portraits) and 6x (front-facing idle sprite frames) nearest-neighbor PNGs to `docs/public/img/portraits/`.

## Deploy

1. Create the public repo `soror2012/tetre-docs` and push `main`.
2. In the repo, **Settings > Pages > Build and deployment > Source = GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`: `npm ci`, `npm run docs:build`, upload the artifact, `actions/deploy-pages`.

## Sources of truth

Content is drafted from the game repo's design docs (lore handoff, blueprint, art direction, combat spec, architecture). When those change, update the matching pages here. Combat pages are marked "In development (M3)" until the system ships.
