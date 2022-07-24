import { Scale } from '../../types/scale';
import { createBackgroundColors } from './createBackgroundColors';
import { createBorderColors } from './createBorderColors';
import { createComponentBackgroundColors } from './createComponentBackgroundColors';
import { createTextColors } from './createTextColors';

export * from './createBackgroundColors';
export * from './createBorderColors';
export * from './createComponentBackgroundColors';
export * from './createTextColors';

export const createColors = <
  Prefix extends string,
  NamedScale extends Scale<Prefix>,
  Suffix extends string = '',
>(
  scale: NamedScale,
  suffix?: Suffix,
) => {
  suffix = suffix ?? ('' as Suffix);

  return {
    ...createBackgroundColors(scale, suffix),
    ...createComponentBackgroundColors(scale, suffix),
    ...createBorderColors(scale, suffix),
    ...createTextColors(scale, suffix),
  };
};
