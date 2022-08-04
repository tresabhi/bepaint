# 🎡 Bepaint

<!-- TODO: make the logo a combo of 🎡 and 🏞️ -->

Quickly generate elegant themes with minimum code. We recommend using color scales by [Radix Colors](https://www.radix-ui.com/colors) since Bepaint follows the ["Understanding the Scales" guidelines](https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale) from that very project.

# Quick Start

## Installation

### NPM

```
npm install --save bepaint
```

### Yarn

```
yarn add bepaint
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
      ...createColors(indigo, 'accent'),

      // ...or, choose a sub-category.
      ...createTextColors(red, 'angry'),
    }
  }
})
```

**Result:**

A Typescript-powered list of all the theme color tokens.

![Type-safe theme color predictions](https://i.imgur.com/ol8ncOF.png)
