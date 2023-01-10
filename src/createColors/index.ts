import { BackgroundColorNames, createBackgroundColors } from './background';
import { BorderColorNames, createBorderColors } from './border';
import { ComponentColorNames, createComponentColors } from './component';
import { createTextColors, TextColorNames } from './text';

export * from './background';
export * from './border';
export * from './component';
export * from './text';

export type ColorNames<Suffix extends string | undefined> =
  | BackgroundColorNames<Suffix>
  | BorderColorNames<Suffix>
  | ComponentColorNames<Suffix>
  | TextColorNames<Suffix>;

export type Colors<Suffix extends string | undefined> = Record<
  ColorNames<Suffix>,
  string
>;

export function createColors<
  Name extends string,
  Suffix extends string | undefined,
>(colors: Colors<Name>, suffix?: Suffix) {
  return {
    ...createBackgroundColors(colors, suffix),
    ...createBorderColors(colors, suffix),
    ...createComponentColors(colors, suffix),
    ...createTextColors(colors, suffix),
  } as Colors<Suffix>;
}
