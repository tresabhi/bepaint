# Bepaint

🎡 Quickly generate elegant themes with minimal code

# Documentation

Documentation for Bepaint will be temporarily available here in the README while my website undergoes construction using this library itself. The documentation in the future will be available at https://tresabhi.github.io/projects/bepaint.

## Installation

Install Bepaint as an NPM package and [Radix Color](https://www.radix-ui.com/colors) to compose pallets

```bash
npm install bepaint @radix-ui/colors
# or
yarn add bepaint @radix-ui/colors
```

## Basic Usage

Use this library in combination with [Radix Colors](https://www.radix-ui.com/colors) to instantly create pallets. Radix Colors provides [color scales of 12](https://www.radix-ui.com/docs/colors/palette-composition/the-scales) that [can be composed together](https://www.radix-ui.com/docs/colors/palette-composition/composing-a-palette) to create a color system for a website/app.

The colors provided should be more than sufficient; however, you may try to curate a pallet. Just remember to structure your color pallet similarly to what is provided by the Radix team.

```ts
import { createColors } from 'bepaint';
import { mauve, red } from '@radix-ui/colors';

const colors = {
  /**
   * appBackground1, component, textLowContrast, etc.
   */
  ...createColors(mauve),

  /**
   * appBackground1_danger, component_danger,
   * textLowContrast_danger, etc.
   */
  ...createColors(red, '_danger'),
};
```

## Usage with CSS-in-JS

Stitches, for example:

```ts
// stitches.config.ts
import { createColors, createBorderStyles, createRadii } from 'bepaint';
import { mauve, blue } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      ...createColors(mauve),
      ...createColors(blue, '_accent'),
    },

    borderStyles: createBorderStyles(mauve),

    radii: createRadii(),
  },
});
```

## Or Just Plain Old JavaScript/TypeScript

```ts
import { colors } from 'theme.ts';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

canvas.colors.appBackground2;
document.body.style.backgroundColor = colors.appBackground1;
```

## Create Colors

The flagship creator deals with creating colors for use anywhere that requires it.

> **Info** This library simply implements [the understanding the scales section of Radix Colors](https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale). All tokens comply with the guidelines. I would highly recommend giving the docs a read.

- `createColors`
  - Combines the output of all color creators listed below
  - Accepts a color pallet
  - Accepts a suffix
- `createBackgroundColors`: common background colors
- `createBorderColors`: common border colors
  - It's redundant; use `createBorderStyles` for preset some CSS `border-style
- `createComponentColors`: common inputs, buttons, sliders, etc. colors
- `createTextColors`: common text colors

## Create Border Styles

- `createBordersStyles`
  - Simple plug-and-chug presets for the CSS `border` property
  - Accepts a color pallet
  - Accepts a suffix
  - Accepts a border style
    - Default: `solid 0.0625rem` (solid, 1 pixel wide)
    - Lets you override other properties of the border apart from the concatenated color

## Create Font Sizes

- `createFontSizes`
  - Combines the output of all font size creators listed below
  - Accepts a scale
  - Accepts a suffix
- `createBodyFontSizes`: common font sizes for content matter
- `createHeadingFontSizes`: common font sizes for headings and subheadings

## Create Radii

- `createRadii`
  - Provides presets for the CSS `border-radius` property
  - Accepts a scale
  - Accepts a suffix

## Create Spaces

- `createSpaces`
  - Combines the output of all space creators listed below
  - `createGapSpaces`: common spaces for the CSS `gap` property commonly used in combination with the CSS `flex` display
  - `createMarginSpaces`: common spaces for the CSS `margin` property
  - `createPaddingSpaces`: common spaces for the CSS `padding` property

## Create Sizes

- `createSizes`: common sizes for CSS properties `width` and `height`

## Create Borders Styles

- `createBordersStyles`
  - Implements the same border colors from `createBorderColors`
  - Accepts a `borderStyles` argument
    - Lets you change the style of the border which, by default, is `solid 0.0625rem` (`1px` wide solid border)

# Changelogs

## Bepaint v0.1.0 Beta 1

### Generate Creator Info

- Most color-related creators accept a [Radix Colors](https://www.radix-ui.com/colors) pallet
- Some creators also accept a scale that is simply multiplied with every value
- Every creator accepts a suffix
- Suffixes insert a `_` between the key and the suffix
- Suffixes are fully typed

### Create Borders Styles

> **Warning** `createBordersStyles` is misspelled and will be renamed to `createBorderStyles` in the next beta

> **Warning** the `border` suffix is redundant and will be removed in the next beta

- Accepts color pallet
- Accepts `borderStyles` argument
  - Lets you change the CSS properties of the border
  - By default, it is `solid 0.0625rem` (`1px` wide)
  - `borderStyles` will be prefixed with the color of choice

### Create Colors

> **Warning** `...Pressed` will be replaced with `...Active`

> **Warning** `...Hovered` will be replaced with `...Hover`

> **Warning** `component` will be replaced with `componentInteractive`

> **Warning** `componentNonInteractive` is currently missing

- Accepts color pallet
- Meant to be used anywhere that requires colors

### Create Font Sizes

- Accepts scale
- Provides presets for `font-size`
- Do not use this to size in-text icons; instead, use `createSizes( ... ).inTextIcon`

### Create Radii

- Accepts scale
- Provides presets for border radii (`border-radius`)

### Create Sizes

- Accepts scale
- Provides presets for CSS `width` and `height`
- More to come later

### Create Spaces

- Accepts scale
- Provides presets for CSS `gap`, `padding`, and `margin`
