---
title: Combat
---

# Combat <span class="pill dev">In development (M3)</span>

::: warning In development
Combat is **approved as a design and being implemented right now** (milestone M3). The rules and numbers on this page and the next three are the current spec. Expect them to move as the system is built and tested, and treat every number as a draft.
:::

Turn-based battles on a **visible timeline**. Every action has a time cost, so heavy moves delay your next turn and quick moves bring it sooner. Each party member plays differently through a **Trait**, **Passives** and their own **Techs**, and partners who are ready together can fuse their turns into a [Combo Tech](./combo-techs).

The view is side-on: the party stands on the right in two columns (front and back), enemies on the left.

## The timeline

Battle time is counted in **ticks**. Each combatant has a "next turn" tick, and the lowest one acts next. Ties go to the party, then to the faster unit.

After acting, the delay until your next turn depends on how heavy the action was and how fast you are:

```
delay = round(cost x 100 / (SPD x speedMultiplier + 20))
```

| Action | Time cost |
|---|---|
| Quick techs | 70 to 85 |
| Defend | 60 |
| Item | 80 |
| Attack, Flee | 100 |
| Heavy techs | 130 to 150 |

The strip at the top of the screen shows the **next eight turns**. While you browse a menu, a **ghost marker** shows where your next turn will land if you pick that action, and a **warning mark** appears over an enemy that is winding up a big move. Nothing about turn order is hidden.

## Commands

`Attack · Techs · Item · Defend · Flee`

- **Techs** opens the character's techs, then a **Combos** section for every combo they take part in. Each combo shows its partners, the MP each pays and whether it is ready.
- **Defend** halves the damage you take until your next turn. It costs a short turn (60), and Vulcan's version is *Loaf*.
- **Item** uses the shared party inventory.
- **Flee** only works in some fights. The chance rises when the party is faster than the enemy, and a failed attempt costs the turn.

## Elements

**Fire, Ice, Lightning, Earth and Wind**, plus non-elemental.

| Result | Damage |
|---|---|
| Weak | x1.5 |
| Neutral | x1.0 |
| Resist | x0.5 |
| Immune | x0 |

Radiance and Hollow are **not** combat elements. They are world and lore concepts.

## Damage in brief

```
physical = power x ATK x 60 / (60 + target DEF)
magical  = power x MAG x 60 / (60 + target RES)
```

Then a small random variance (0.92 to 1.08), a critical hit (x1.5), the element multiplier and modifiers like *Attuned*, *Guarded* and *Fortified*. Every battle is seeded, so the same inputs always produce the same fight.

## Statuses

| Status | Effect |
|---|---|
| Kindled | Burn: 8% max HP at the start of each turn, for 2 turns |
| Staggered | The target's next turn is pushed back 40 ticks |
| Shocked | Speed x0.8 for 2 turns |
| Stunned | Skips the next turn |
| Barrier | Absorbs a set amount of damage before HP |
| Guarded | Half damage, and counters physical attackers |
| Fortified | 25% less damage for 3 turns |
| Defending | Half damage until the next turn |
| Attuned / Inspired | The next qualifying action gets +25% / +30% power |
| Momentum | Lorena's stacks, 0 to 3 |

## Enemies

Enemy AI follows a data-driven list of weighted rules. Big attacks are **telegraphed**: the enemy winds up on one turn and strikes on the next, and the wind-up shows on the timeline.

The Halford **Vultures** are disciplined professionals, not monsters. Battle text stays matter-of-fact.

| Enemy | HP | Weak to | Moves |
|---|---|---|---|
| **Practice Automaton** (Academy training construct) | 90 | Lightning | Swing; wind-up then Heavy Swing |
| **Vulture Trooper** | 110 | Lightning | Rifle Shot (can hit the back row); Suppressing Fire (a row, may Stagger) |
| **Vulture Engineer** | 90 | Lightning | Shock Grenade (all, may Shock); Field Patch (heals an ally); Wrench |
| **Vulture Breacher** (optional, tougher) | 260 | Lightning, Earth | Shield Wall; telegraphed Breach Charge (a row) |

## Encounters and flow

- **Entering a battle:** a swirl and shatter transition, then the battle. Winning returns you to the same tile and facing.
- **Training:** the courtyard has a Practice Automaton you can spar with ("Spar with the training construct?").
- **Victory:** an XP summary and any level-up lines.
- **Defeat:** a "The party has fallen" screen with *Retry battle* or *Return to title*.
- **HP and MP carry over** between battles. In the demo, talking to Hugh outside battle restores the party.

## Status of this page

| Part | State |
|---|---|
| Rules and numbers | Approved spec, v0.1 |
| Battle engine and screen | Being built (M3) |
| Final kits and balance | Not final |

::: info Still being decided
How many characters fit in a battle party in the full game is open (all four fight together in the demo).
:::
