import { createFontSizesDefaultOptions, CreateFontSizesOptions } from '.';
import { Range, Suffixed } from '../../types';
import { mergeOptions, suffixed, toRem } from '../../utilities';

export type HeadingFontSizeToken =
  | 'title'
  | `heading${Range<1, 6>}`
  | 'subheading';

export type HeadingFontSizes<Suffix extends string> = Record<
  Suffixed<Suffix, HeadingFontSizeToken>,
  string
>;

export const createHeadingFontSizes = <Suffix extends string = ''>(
  options?: Partial<CreateFontSizesOptions<Suffix>>,
) => {
  const m = mergeOptions(createFontSizesDefaultOptions, options);
  const s = suffixed(m.suffix);

  return {
    [`title${s}`]: toRem(50),
    [`heading${s}1`]: toRem(32),
    [`heading${s}2`]: toRem(26),
    [`heading${s}3`]: toRem(22),
    [`heading${s}4`]: toRem(18),
    [`heading${s}5`]: toRem(16),
    [`heading${s}6`]: toRem(12),
    [`subheading${s}`]: toRem(24),
  } as HeadingFontSizes<Suffix>;
};
