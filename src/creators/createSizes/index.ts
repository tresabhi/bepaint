import { Suffixed } from '../../types';
import { CSSConvertibleUnit, suffixed, toUnit } from '../../utilities';
import { SizeVariants } from '../createSpaces';

export type SizeToken = `icon${SizeVariants}` | 'iconInText';

export type Sizes<Suffix extends string> = Record<
  Suffixed<Suffix, SizeToken>,
  string
>;

export const createSizes = <Suffix extends string = ''>(
  unit: CSSConvertibleUnit = 'rem',
  suffix?: Suffix,
) => {
  const to = (value: number) => toUnit(value, unit);
  const s = suffixed(suffix);

  return {
    [`icon${s}`]: to(16),
    [`iconMajor${s}`]: to(32),
    [`iconMinor${s}`]: to(8),
    [`iconInText${s}`]: '1em',
  } as Sizes<Suffix>;
};
