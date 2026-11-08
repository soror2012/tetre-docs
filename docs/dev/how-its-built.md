---
title: How It's Built
---

# How It's Built

## The golden rule

> **Rules live in pure TypeScript, and Phaser is a thin player.**

Everything that decides what happens (maps, movement, events, text paging, game state and, soon, all of combat) lives in `systems/` with **no Phaser import**. Scenes only draw and take input. That keeps the rules unit-testable without a renderer and lets the same state serve combat and saves.

```
Boot → Title → Exploration(map, spawn) ⇄ Exploration(other map)
                  │  ▲        (a warp fades out, restarts with a new map, fades in)
                  │  └── UI scene runs in parallel: dialogue, choices, fades
                  └──► Battle → back to the same map, tile and facing
```

## Layout

| Folder | Holds |
|---|---|
| `core/` | Constants, scene keys, game state, event bus, input map |
| `data/` | Shared type contract, maps, event scripts, character definitions, gameplay config |
| `systems/` | Pure logic: maps, movement, event runner, dialogue paging, combat |
| `scenes/` | Phaser scenes: title, exploration, UI overlay, battle |
| `entities/` | Phaser-side actors: player, NPCs, interactables |
| `ui/` | Window frames, dialogue and choice boxes |
| `art/` | Palette, font, tile, sprite and portrait generators |

## Data-driven content

- **Maps** are ASCII layouts plus a legend, so they are easy to read, diff and write. A new location is a new JSON file, not new code.
- **Events** are small scripts in one command language that drives dialogue, cutscenes and Ward Flickers alike.
- **Gameplay numbers** (speeds, text pace, and in combat the abilities, enemies, items and encounters) live in data files, never in code.

## Verified by running it

A passing parse is not a working game. Every player-visible change is launched and screenshotted, and a Playwright test plays the keyboard-only opening: title, intro, Hugh, Vulcan's choice, the noticeboard, the classroom and back.

## Combat architecture (M3)

The combat engine is a pure module with a small public API: `availableActions`, `validTargets`, `previewTimeline`, `submit`, `runEnemyTurn`, `outcome` and `rewards`. It returns a stream of events (damage, heal, status, KO, telegraph and so on) that the battle scene simply plays back. With a seeded random number generator, the same inputs produce an identical battle, which is tested.
