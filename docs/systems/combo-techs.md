---
title: Combo Techs
---

# Combo Techs <span class="pill dev">Implemented (M3 prototype)</span>

Two or three partners spend their turns together for one big effect. This mechanic is inspired by the multi-character techs of *Chrono Trigger*. **All names, effects and characters here are original.**

Combos mirror the cast's bonds. Silas and Vulcan taught each other, Lorena is a friendly competitor who keeps score, and Hugh is Silas's true rival.

## When a combo is available

On a character's turn a combo is listed when **all** of these hold:

1. Every member is in the active party, alive, not Stunned and able to pay their share of the MP.
2. Every **partner's** next turn is within the **ready window**, 100 ticks by default (about half an average turn).

If a combo fails, it shows what is wrong: "Lorena not ready", "Vulcan: MP" or "Vulcan: KO". A Triple with one KO'd partner still shows, marked with that reason. Combos whose members aren't in the party are hidden, and so is a combo whose partners are **all** KO'd.

![Lorena's Techs menu with a Combos section: Firebrand is ready, Even Score and Threefold Dawn say "Silas not ready"](/img/battle-techs.png)

## What a combo costs

- Every member pays their MP share.
- Every member's next turn is pushed back by the combo's cost. That **uses up the partner's upcoming turn.**
- It resolves as a single action behind a name banner in the display face.

So a combo trades two or more turns for one large, synergistic effect. The skill is **lining up your partners' turns** on the timeline.

## The five combos

| Combo | Members | MP | Cost | Target | Effect |
|---|---|---|---|---|---|
| **Crossed Paths** | Silas + Vulcan | 4 + 6 | 110 | One enemy | Silas's sword wreathed in Vulcan's flame (Fire). If the target is **Kindled**, the remaining burn detonates instantly for double |
| **Even Score** | Silas + Lorena | 4 + 0 | 120 | One enemy | Four alternating hits as two friends try to out-hit each other. Each hit gives Lorena 1 Momentum, and the last hit has a higher crit chance |
| **Firebrand** | Lorena + Vulcan | 0 + 8 | 130 | An enemy row | Spends Lorena's Momentum for extra power; 60% chance of Kindled (Fire, physical) |
| **Rivals' Accord** | Silas + Hugh | 6 + 8 | 120 | All allies | Heals the party and grants a Barrier, and Silas becomes Attuned. Two leaders who always clash, in step for once |
| **Threefold Dawn** (Triple) | Silas + Lorena + Vulcan | 8 + 4 + 10 | 150 | All enemies | The Academy trio together. Non-elemental, and **ignores half of the enemy's defense** |

### Rivals' Accord {#rivals-accord}

The one Dual built around the rivalry between Silas and Hugh. Its availability is tied to the story.

## Momentum and combos

Combos don't grant Lorena Momentum by themselves. **Even Score** gives her 1 per hit (four hits in all). **Firebrand** only *spends* her Momentum for extra power.

## Power

A combo's power can draw on several members' stats. Crossed Paths, for example, uses Silas's ATK and Vulcan's MAG together. Every combo has a "learned" condition, so later builds can unlock them through story or level.

## Edge cases

- If a partner is KO'd or Stunned between opening the menu and confirming, the combo is re-checked and the menu refreshes.
- If the combo kills every target before its hits are done, the remaining hits retarget living enemies, or are skipped if none are left.
- If only the initiator can act, combos are hidden rather than greyed out.
- Using a combo uses up every member's upcoming turn, so a rushed combo can leave the party exposed.

::: warning Balance note
Combos are currently **very strong**: an opening *Threefold Dawn* can cut a fight to a third of its length. They will be tuned after playtesting.
:::

::: info Still being decided
More combos for later party members will come with the full roster.
:::
