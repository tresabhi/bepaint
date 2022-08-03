import { merge } from 'lodash';
import { createSpacesDefaultOptions, SizeVariant, SpaceVariant } from '.';
import { Suffixed } from '../../types';
import { suffixed, toUnit } from '../../utilities';
import { CreateSizesOptions } from '../createSizes';

export type GapSpaceToken = `gap${SpaceVariant}${SizeVariant}`;

export type GapSpaces<Suffix extends string> = Record<
  Suffixed<Suffix, GapSpaceToken>,
  string
>;

export const createGapSpaces = <Suffix extends string = ''>(
  options?: Partial<CreateSizesOptions<Suffix>>,
) => {
  const m = merge(createSpacesDefaultOptions, options);
  const s = suffixed(m.suffix);
  const to = (value: number) => toUnit(value * m.scale, m.unit);

  return {
    [`gapRelated${s}`]: to(4),
    [`gapRelatedMajor${s}`]: to(8),
    [`gapRelatedMinor${s}`]: to(2),
    [`gapUnrelated${s}`]: to(8),
    [`gapUnrelatedMajor${s}`]: to(16),
    [`gapUnrelatedMinor${s}`]: to(4),
  } as GapSpaces<Suffix>;
};
