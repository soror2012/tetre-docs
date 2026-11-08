---
title: Progression
---

# Progression <span class="pill dev">In development (M3)</span>

Progression in the demo is deliberately simple: levels, XP, equipment and items. There is no skill tree or job system yet, and no grinding is needed.

## Levels and XP

- Every **surviving** party member gets the encounter's full XP. KO'd members get none.
- XP needed for the next level: `round(20 x level^1.5)`.
- Level cap in the demo: **10**.
- Stats grow linearly from the character's base stats and per-level growth, rounded down ([see the table](./kits#base-stats-at-level-1)).
- On a level-up, HP and MP rise by the amount gained, and any newly unlocked passive is announced.
- Levels are granted at the end of a victory, never mid-battle.

## Equipment

Three slots per character: **weapon, armor and accessory**. Each piece adds flat stat bonuses, which are added to the level stat before status multipliers.

| Character | Weapon | Armor |
|---|---|---|
| Silas | Academy Sabre (+4 ATK) | Academy Coat (+3 DEF, +2 RES) |
| Lorena | Training Gauntlets (+5 ATK) | Academy Coat |
| Vulcan | Apprentice Staff (+2 ATK, +4 MAG) | Academy Coat |
| Hugh | Warden's Rod (+1 ATK, +3 MAG) | Academy Coat |

There are no accessories yet, and no shop or equipment menu in the first combat build. Equipment shows up in the stats only.

## Items

The party shares one inventory.

| Item | Effect | At start |
|---|---|---|
| Tonic | Heals 50 HP | 3 |
| Clear Draught | Restores 15 MP | 2 |
| Revival Salt | Revives a KO'd ally at 25% HP | 1 |

## Rest

HP and MP carry between battles. For now, talking to Hugh outside battle restores the whole party until a proper rest system exists.

::: info Still being decided
Equipment specifics beyond the demo, the full combat progression and any skill tree are open questions.
:::
