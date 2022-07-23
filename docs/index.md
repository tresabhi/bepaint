# 🧵 Stitches Dye

Quickly generate elegant Stitches themes with minimum code. We recommend using color scales by [Radix Colors](https://www.radix-ui.com/colors) since Stitches Dye follows the ["Understanding the Scales" guidelines](https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale) from that very project.

Full documentation will be added soon!

# Quick Start

## Installation

### NPM

```
npm install --save stitches-dye
```

### Yarn

```
yarn add stitches-dye
```

## Usage

### Colors

```ts
// in stitches.config.ts

export const { theme, css, ... } = createStitches({
  theme: {
    colors: {
      // base theme for the app
      ...createColors(mauve),

      // accent colors for things like call-to-action components
      ...createColors(indigo, 'Accent'),

      // ...or, choose a sub-category.
      ...createTextColors(red, 'Angry'),
    }
  }
})
```

**Result:**

A Typescript-powered list of all the theme color tokens.

![Type-safe theme color predictions](https://i.imgur.com/ol8ncOF.png)
