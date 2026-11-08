---
title: Character Kits
---

# Character Kits <span class="pill dev">In development (M3)</span>

::: warning Demo placeholders
These are the demo kits from the approved combat spec. The **trait and passive framework** is what is meant to last. The numbers and the exact techs will change.
:::

Each character has three layers: a **Trait** that is always on, **Passives** that unlock with level, and **Techs** that cost MP.

## Base stats at level 1

Growth per level is in brackets.

| | HP | MP | ATK | DEF | MAG | RES | SPD |
|---|---|---|---|---|---|---|---|
| **Silas** | 120 [+14] | 30 [+3] | 18 [+2] | 12 [+1.5] | 16 [+2] | 12 [+1.5] | 26 [+0.5] |
| **Lorena** | 140 [+16] | 12 [+1] | 22 [+2.5] | 14 [+1.5] | 6 [+0.5] | 8 [+1] | 24 [+0.5] |
| **Vulcan** | 95 [+10] | 42 [+5] | 11 [+1] | 8 [+1] | 23 [+2.5] | 16 [+1.5] | 22 [+0.5] |
| **Hugh** | 110 [+12] | 38 [+4] | 12 [+1] | 13 [+1.5] | 18 [+2] | 18 [+2] | 21 [+0.5] |

## Traits and passives

| Character | Role | Trait | Passive (L1) | Passive (L3) |
|---|---|---|---|---|
| [Silas](/characters/silas) | Spellblade | **Twin Discipline**: physical then magic (or the reverse) grants *Attuned*, +25% power | Steady Hand: +5% physical crit | Peacekeeper: an ally under 30% HP pulls his next turn 25% closer, once per ally |
| [Lorena](/characters/lorena) | Vanguard | **Momentum**: each hit adds a stack (max 3); Heavy Strike spends them | Never Yield: survive a lethal hit at 1 HP, once per battle | Keeping Score: Silas's crit gives her 1 Momentum |
| [Vulcan](/characters/vulcan) | Battle mage | **Idle Genius**: *Loaf* restores 12% MP and makes his next spell *Inspired*, +30% | Showoff: hitting a weakness pulls his turn 20 ticks sooner | Swordwork: Attack uses max(ATK, 0.8 x MAG) |
| [Hugh](/characters/hugh) | Warden | **Vigilance**: overheal becomes Barrier, up to 25% max HP | Field Medic: +15% healing under 30% HP | Eager: always first to act in a battle |

## Techs

### Silas

| Tech | Kind | Target | Power | MP | Cost | Effect |
|---|---|---|---|---|---|---|
| Arc Slash | Physical | Enemy | 1.3 | 3 | 100 | None |
| Frost Lance | Magical (Ice) | Enemy | 1.4 | 6 | 110 | None |
| Aegis | Support | Ally | 2.0 | 5 | 80 | Barrier of 2.0 x MAG for 3 of the target's turns |

### Lorena

| Tech | Kind | Target | Power | MP | Cost | Effect |
|---|---|---|---|---|---|---|
| Heavy Strike | Physical, heavy | Enemy | 1.8 | 0 | 140 | Spends Momentum; 50% chance to Stagger |
| Guard Stance | Support | Self | n/a | 0 | 70 | Guarded until her next turn: half damage, counters physical attackers at 0.6 power |

### Vulcan

| Tech | Kind | Target | Power | MP | Cost | Effect |
|---|---|---|---|---|---|---|
| Kindle | Magical (Fire) | Enemy | 1.2 | 5 | 100 | 70% chance of Kindled for 2 turns |
| Tempest | Magical (Lightning) | All enemies | 0.8 | 9 | 130 | None |

### Hugh

| Tech | Kind | Target | Power | MP | Cost | Effect |
|---|---|---|---|---|---|---|
| Mend | Heal | Ally | 1.6 | 6 | 90 | Heals |
| Bulwark | Support | All allies | n/a | 8 | 110 | Fortified (25% less damage) for 3 turns |

*Cost* is the time cost on the [timeline](./combat#the-timeline). Higher means a longer wait for the next turn.

## Combos

Techs that fuse several characters are on the next page: [Combo Techs](./combo-techs).
