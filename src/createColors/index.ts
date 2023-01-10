import { SuffixInput } from 'types/suffix';
import { BackgroundColorNames, createBackgroundColors } from './background';
import { BorderColorNames, createBorderColors } from './border';
import { ComponentColorNames, createComponentColors } from './component';
import { createTextColors, TextColorNames } from './text';

export * from './background';
export * from './border';
export * from './component';
export * from './text';

export type ColorNames<Suffix extends SuffixInput> =
  | BackgroundColorNames<Suffix>
  | BorderColorNames<Suffix>
  | ComponentColorNames<Suffix>
  | TextColorNames<Suffix>;

export type Colors<Suffix extends SuffixInput> = Record<
  ColorNames<Suffix>,
  string
>;

export function createColors<Suffix extends SuffixInput>(
  colors: Colors<string>,
  suffix?: Suffix,
) {
  return {
    ...createBackgroundColors(colors, suffix),
    ...createBorderColors(colors, suffix),
    ...createComponentColors(colors, suffix),
    ...createTextColors(colors, suffix),
  } as Colors<Suffix>;
}
