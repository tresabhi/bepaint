import { createSpacesDefaultOptions, SizeVariant } from '.';
import { Suffixed } from '../../types';
import { mergeOptions, suffixed, toUnit } from '../../utilities';
import { CreateSizesOptions } from '../createSizes';

export type PaddingSpaceToken = `padding${SizeVariant}`;

export type PaddingSpaces<Suffix extends string> = Record<
  Suffixed<Suffix, PaddingSpaceToken>,
  string
>;

export const createPaddingSpaces = <Suffix extends string = ''>(
  options?: Partial<CreateSizesOptions<Suffix>>,
) => {
  const m = mergeOptions(createSpacesDefaultOptions, options);
  const s = suffixed(m.suffix);
  const to = (value: number) => toUnit(value * m.scale, m.unit);

  return {
    [`padding${s}`]: to(8),
    [`paddingMajor${s}`]: to(16),
    [`paddingMinor${s}`]: to(4),
  } as PaddingSpaces<Suffix>;
};
