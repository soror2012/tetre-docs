---
title: Palette & Look
---

# Art Direction

Tetre looks like a warm, dense, lived-in modern fantasy. The **same palette and rules** apply to today's procedurally generated placeholder art and to any art that replaces it.

## The look in one line

Cream sandstone, violet and gold heraldry, dark-navy ironwork, flowers everywhere. Where the Ward is healthy, the world is saturated, layered and alive.

![The Academy classroom](/img/int-classroom.png)

## Palette

Each ramp runs dark to light. Art may only use these colors.

<Swatches ramp="ink" use="Outlines and deepest shadow, never pure black" :colors="['#2b2133']" />
<Swatches ramp="stone" use="Cream walls, balustrades, trims" :colors="['#8a7563','#b49c84','#d8c3a5','#efe1c8','#fbf3e2']" />
<Swatches ramp="pave" use="Rose flagstones, courtyard floor" :colors="['#6e5a60','#8f7479','#a98e90','#c2a9a6','#d6c1bb']" />
<Swatches ramp="brick" use="Planters, low walls" :colors="['#7a4e42','#9c6553','#ba8169']" />
<Swatches ramp="violet" use="Banners, roofs, Academy uniforms, UI fill" :colors="['#23214a','#33357a','#4a4fa8','#6f74cf']" />
<Swatches ramp="gold" use="Emblems, trims, UI studs, Radiance accents" :colors="['#8a5a1c','#c98e2a','#f0c24a','#fbe38a']" />
<Swatches ramp="leaf" use="Grass, trees, ivy" :colors="['#1f3f2a','#2f5e33','#4b8a3c','#79b24a','#a8d46a']" />
<Swatches ramp="bloom" use="Flowers: red/pink, blue, purple, yellow" :colors="['#d9475a','#ef7c9a','#f6b3c4','#4f6fd8','#8aa6f0','#8a52c8','#b48ae6','#f0b232']" />
<Swatches ramp="water" use="Water, Ward crystal base" :colors="['#1f5560','#2f7d84','#4fa6a4','#8fd3c8']" />
<Swatches ramp="iron" use="Lampposts, benches, Vultures gear" :colors="['#1c2238','#2c3554','#46527a']" />
<Swatches ramp="glass" use="Windows, lamp glow, Ward Node highlights" :colors="['#9fb6d6','#cfe0f2','#f4f9ff']" />
<Swatches ramp="skin" use="A diverse range of skin tones" :colors="['#5a3a2c','#8a5a3e','#c08a64','#e8b896','#f6d6bc']" />
<Swatches ramp="hollow" use="Desaturated Hollow and Flicker grading" :colors="['#4a4650','#6b6772','#8e8a94','#b5b1ba']" />

## Rules

| Rule | Why |
|---|---|
| Outlines are **ink** `#2b2133`, never `#000` | Soft plum outlines keep pixels warm |
| Light comes from the **top-left**; shadows fall bottom-right | One consistent lighting model |
| Ground tiles carry **texture and wear**, never a flat fill | Worn flagstone, moss in cracks, seeded variation |
| Walls are 1 to 3 tiles tall with a lit "top" row, floors stay flat | The 3/4 view |
| Characters are small and readable, about 2.5 heads tall, 16 x 24 px | Distinct silhouettes and colors |
| Healthy areas are saturated and layered | Radiance reads as abundance |

## Characters

See the [signature color table](/characters/#signature-colors).

## The Ward and Hollow

- **Ward Node:** a tall crystalline formation, water-teal to glass with a slow gold pulse and rising motes. Not a machine.
- **Ward Flicker:** a brief desaturation toward gray, a pale lattice across the sky, a slight camera shake and an audio dip.
- **Hollow:** gray, desaturated, erratic. It reads as wrongness and instability, not as demons.

## Anti-goals

- Not RPG Maker default: no generic grass squares, beige window boxes or stock fonts.
- No pure black outlines, no flat fills on large areas, no neon.
- Hollow is never evil purple-and-red demon imagery.
- Grand Cross is modern fantasy: not medieval-only, and not dystopian.
