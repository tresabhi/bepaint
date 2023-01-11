import { SuffixInput } from 'types/suffix';
import { BodyFontSizeNames, createBodyFontSizes } from './body';
import { createHeadingFontSizes, HeadingFontSizeNames } from './heading';

export type FontSizeNames<Suffix extends SuffixInput> =
  | BodyFontSizeNames<Suffix>
  | HeadingFontSizeNames<Suffix>;

export type FontSizes<Suffix extends SuffixInput> = Record<
  FontSizeNames<Suffix>,
  string
>;

export function createFontSizes<Suffix extends SuffixInput>(
  scale = 1,
  suffix?: Suffix,
) {
  return {
    ...createBodyFontSizes(scale, suffix),
    ...createHeadingFontSizes(scale, suffix),
  } as FontSizes<Suffix>;
}

export * from './body';
export * from './heading';
