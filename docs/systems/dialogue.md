---
title: Dialogue & Events
---

# Dialogue & Events

Dialogue is data-driven. Every conversation, cutscene and Ward Flicker is a script in the same small event language, so adding a scene means writing JSON, not code.

![Hugh greets Silas in the courtyard, with a portrait, a name plate and a dialogue box](/img/w3-hugh-dialogue.png)

## The dialogue box

- A violet window with a cream border and gold corner studs.
- Speaker name in gold, body text in cream.
- Typewriter text, paged when a line is long.
- A portrait for named speakers.

## Choices

Some conversations branch. Vulcan will ask whether you want to spar after class:

![Vulcan offers a Yes / No choice about sparring after class](/img/w3-vulcan-choice.png)

Choosing "Yes" sets a story flag, so later conversations remember it.

## Reading the world

The courtyard noticeboard is a good example of environmental storytelling:

> **PROSPECTS OF DISTINCTION:** The Elites are accepting applications. Inquire within.
>
> **WARD CHAMBERS:** Closed to the public during Elite maintenance.
>
> **LOST:** one left glove, violet. Reward: gratitude, and half a pastry.

And the chalkboard in the classroom explains the world's basics in two lines (see [The Ward](/world/ward)).

## The event commands

One command language drives it all.

| Command | What it does |
|---|---|
| `say` | Show a dialogue box (with an optional speaker and portrait) |
| `choice` | Show a choice and branch on the answer |
| `if` / `setFlag` | Branch on a story flag; remember something |
| `face`, `move`, `wait` | Direct actors and timing |
| `fade` | Fade the screen to black and back |
| `warp` | Move to another map |
| `flicker` | Play a Ward Flicker |
| `battle` | Start a battle, then continue on victory or defeat |
