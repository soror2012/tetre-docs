---
title: Combat
---

# Combat <span class="pill dev">Implemented (M3 prototype)</span>

::: warning Prototype, not final
Combat is **implemented as a prototype** (milestone M3) and is being polished. The rules and numbers on this page and the next three match the current build. Balance is not final: **combos are currently very strong** and will be tuned after playtesting.
:::

![A battle against Halford's Vultures on a night street: the timeline strip on top, the party on the right, enemies on the left, and the command and party panels below](/img/battle-start.png)

Turn-based battles on a **visible timeline**. Every action has a time cost, so heavy moves delay your next turn and quick moves bring it sooner. Each party member plays differently through a **Trait**, **Passives** and their own **Techs**, and partners who are ready together can fuse their turns into a [Combo Tech](./combo-techs).

The view is side-on: enemies on the left, the party on the right in two columns. Silas and Lorena hold the front; Vulcan and Hugh stand behind them.

## The timeline

Battle time is counted in **ticks**. Each combatant has a "next turn" tick, and the lowest one acts next. Ties go to the party, then to the faster unit. Opening positions are seeded by the encounter, so every battle plays out the same way given the same choices.

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
- **Defend** halves the damage you take until your next turn (it clears when that turn arrives). It costs a short turn (60), and Vulcan's version is *Loaf*.
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

Timed statuses **count down at the start of the affected unit's turn**. *Defending* and *Guarded* clear when their owner's next turn comes round. *Attuned* and *Inspired* don't expire on a timer: they last **until used**.

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
| Momentum | Lorena's stacks, 0 to 3. *Heavy Strike* spends all of them for power, then its own hit grants 1 |

## Enemies {#enemies}

Enemy AI is a short, **deterministic** list of rules tied to turn counters, not random behavior. Once you've watched an enemy for a few turns you can predict it. Big attacks are **telegraphed**: the enemy winds up on one turn and strikes on the next, and the wind-up shows on the timeline.

The Halford **Vultures** are disciplined professionals, not monsters. They coordinate, patch each other up and speak matter-of-factly. Their gear is weak to Lightning.

<div class="enemy-row">
<figure><Pic src="/img/portraits/practice_automaton-battler.png" alt="Practice Automaton, a brass-and-cream training construct" /><figcaption>Practice Automaton</figcaption></figure>
<figure><Pic src="/img/portraits/vulture_trooper-battler.png" alt="Vulture Trooper, an iron-blue soldier with a rifle" /><figcaption>Vulture Trooper</figcaption></figure>
<figure><Pic src="/img/portraits/vulture_engineer-battler.png" alt="Vulture Engineer, a Vulture with a wrench and field gear" /><figcaption>Vulture Engineer</figcaption></figure>
<figure><Pic src="/img/portraits/vulture_breacher-battler.png" alt="Vulture Breacher, a heavily armored soldier with a shield" /><figcaption>Vulture Breacher</figcaption></figure>
</div>

| Enemy | HP | ATK / MAG | DEF / RES | SPD | Weak / Resists | XP |
|---|---|---|---|---|---|---|
| **Practice Automaton** (Academy training construct) | 200 | 26 / 0 | 10 / 6 | 16 | Lightning / none | 12 |
| **Vulture Trooper** | 220 | 46 / 6 | 14 / 9 | 24 | Lightning / none | 20 |
| **Vulture Engineer** | 180 | 14 / 30 | 10 / 14 | 22 | Lightning / none | 22 |
| **Vulture Breacher** (optional, tougher) | 600 | 46 / 0 | 24 / 8 | 14 | Lightning / Earth | 60 |

### Behavior patterns

| Enemy | Pattern |
|---|---|
| **Practice Automaton** | **Swing** (power 1.0) on most turns. On every 3rd turn it winds up, then lands a **Heavy Swing** (power 2.0). |
| **Vulture Trooper** | **Rifle Shot** (1.1, aimed at anyone, back row included). Every 3rd turn, **Suppressing Fire** across the front row (0.7, 50% chance to Stagger). |
| **Vulture Engineer** | Heals its most hurt ally with **Field Patch** whenever an ally is below half HP. Otherwise alternates **Wrench** (0.9) and **Shock Grenade** (Lightning on the whole party, 0.6, 30% chance to Shock). |
| **Vulture Breacher** | Alternates **Shield Wall** (Guarded) with a telegraphed **Breach Charge** (2.4, hits a whole row). It won't re-raise a shield that is still up. |

Because the patterns are fixed, a good party plans around them: Stagger the Automaton before its wind-up lands, kill the Engineer before the patches pile up and brace for the Breacher's charge.

![The Techs menu showing Lorena's techs and a Combos section: one combo ready, others marked "Silas not ready"](/img/battle-techs.png)

## Encounters and flow

- **Entering a battle:** a swirl and shatter transition, then the battle. Winning returns you to the same tile and facing.
- **Training:** the courtyard has a **Practice Automaton**, a brass training construct with a plate reading "SPAR AT YOUR OWN RISK". Talk to it and choose *Yes* to start a training bout against two constructs. You can flee from it.
- **Victory:** an XP summary and any level-up lines. **Only surviving party members earn XP.**
- **Defeat:** a "The party has fallen" screen with *Retry battle* or *Return to title*.
- **HP and MP carry over** between battles. When you're hurt, go back and talk to Hugh again after his first chat. He patches the whole party up.
- **Encounters:** the training bout (two Automata), a Vultures patrol (two Troopers and an Engineer) and a tougher Breacher group (a Breacher, a Trooper and an Engineer). The Vultures fights can't be fled.

![The victory screen: each survivor gains XP, with level-up lines and a new passive](/img/battle-victory.png)

## Status of this page

| Part | State |
|---|---|
| Rules and numbers | Implemented as a prototype (M3) |
| Battle engine and screen | Working, in integration and polish |
| Final kits and balance | **Not final.** Combos are currently very strong and will be tuned after playtesting |

::: info Still being decided
How many characters fit in a battle party in the full game is open (all four fight together in the demo).
:::
