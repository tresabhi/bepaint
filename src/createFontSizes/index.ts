import { BodyFontSizeNames, createBodyFontSizes } from './body';
import { createHeadingFontSizes, HeadingFontSizeNames } from './heading';

export * from './body';
export * from './heading';

export type FontSizeNames<Suffix extends string | undefined> =
  | BodyFontSizeNames<Suffix>
  | HeadingFontSizeNames<Suffix>;

export type FontSizes<Suffix extends string | undefined> = Record<
  FontSizeNames<Suffix>,
  string
>;

export function createFontSizes<Suffix extends string | undefined>(
  suffix?: Suffix,
  scale = 1,
) {
  return {
    ...createBodyFontSizes(suffix, scale),
    ...createHeadingFontSizes(suffix, scale),
  } as FontSizes<Suffix>;
}
