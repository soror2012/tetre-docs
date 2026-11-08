---
title: Tech Stack
---

# Tech Stack

Tetre is a browser game.

| Layer | Choice |
|---|---|
| Engine | **Phaser 3** (3.90) |
| Language | **TypeScript** (strict) |
| Build | **Vite** |
| Unit tests | **Vitest** |
| Screenshots and end-to-end | **Playwright** (headless Chromium) |
| Art | Generated in code from a fixed palette, swappable by texture key |

## Why

- **Browser-native delivery** was a hard requirement.
- Phaser has mature tilemap, sprite and camera support.
- A command-line toolchain lets every contributor build, test and screenshot without an editor.
- Code-generated placeholder art means nothing blocks gameplay while real art is made.

## Look and feel constants

| Constant | Value |
|---|---|
| Resolution | 480 x 270 |
| Tile | 16 px |
| Character sprite | 16 x 24 px, 48 x 48 px portraits |
| Movement | Grid-stepped, about 4 tiles/s walking, about 7 running |
