import { createSpacesDefaultOptions, SizeVariant, SpaceVariant } from '.';
import { Suffixed } from '../../types';
import { mergeOptions, suffixed, toUnit } from '../../utilities';
import { CreateSizesOptions } from '../createSizes';

export type MarginSpaceToken = `margin${SpaceVariant}${SizeVariant}`;

export type MarginSpaces<Suffix extends string> = Record<
  Suffixed<Suffix, MarginSpaceToken>,
  string
>;

export const createMarginSpaces = <Suffix extends string = ''>(
  options?: Partial<CreateSizesOptions<Suffix>>,
) => {
  const m = mergeOptions(createSpacesDefaultOptions, options);
  const s = suffixed(m.suffix);
  const to = (value: number) => toUnit(value * m.scale, m.unit);

  return {
    [`marginRelated${s}`]: to(2),
    [`marginRelatedMajor${s}`]: to(4),
    [`marginRelatedMinor${s}`]: to(1),
    [`marginUnrelated${s}`]: to(4),
    [`marginUnrelatedMajor${s}`]: to(8),
    [`marginUnrelatedMinor${s}`]: to(2),
  } as MarginSpaces<Suffix>;
};
