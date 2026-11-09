---
title: Exploration & Controls
---

# Exploration & Controls

Exploration is a 3/4 top-down view of towns and places, in the spirit of classic 16-bit JRPGs but with more detail and depth.

![The courtyard of Grand Cross Academy, with flower beds, lampposts, a stag fountain and a noticeboard](/img/w3-planters.png)

## Controls

| Action | Keys |
|---|---|
| Move | Arrow keys or WASD |
| Confirm / interact | Z, Enter or Space |
| Cancel | X or Esc |
| Run (hold) | Shift |
| Fullscreen | F |
| Menu | C (reserved for the party menu) |

The game is played with the keyboard. Gamepad support is planned to use the same action map.

## How movement works

- **Grid-stepped.** You move one tile at a time in four directions, with a short slide between tiles.
- **Walking** is about four tiles per second; **running** about seven.
- **Collision** is per tile: walls, hedges, water and benches block you.
- **Depth sorting.** Characters pass behind lampposts, tree canopies and building tops, which gives the 3/4 look its depth.
- **The camera** follows Silas and stops at the map edge.

## Interacting

Face a person or object and press Confirm. NPCs turn to face you. Interactables include the training construct, noticeboards, plaques, bookshelves and the chalkboard.

## The training construct

Beside the courtyard's open plaza stands a **Practice Automaton**, an Academy training construct. A brass plate reads **"SPAR AT YOUR OWN RISK."** Talk to it and you are asked whether to start a training bout. Say yes and the screen shatters into a battle against two constructs (see [Combat](./combat)). Winning returns you to the same tile, facing the same way, with your HP and MP carried over.

Hurt? **Hugh** will patch the whole party up when you talk to him again.

## Places

You can warp between maps through doors and gates. Each warp fades out and in, and puts you at the right spot and facing.

| Map | Size | Contents |
|---|---|---|
| **Academy courtyard** | 40 x 28 tiles | Facade with doors, rose-flagstone plaza, planters, lampposts and benches, a stag fountain, a lawn with a willow, a noticeboard and a memorial plaque. Hugh, Lorena, Vulcan, students and a groundskeeper |
| **Academy classroom** | 20 x 14 tiles | Desks, chalkboard, bookshelves, students and the Professor |

More of Grand Cross (the city district and the Ward Chambers) is planned for the next milestones.

::: info Still being decided
Whether the full game uses a classic world map, linked regional maps or a hybrid is open.
:::
