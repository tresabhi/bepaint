import { Suffixed } from '../../types';
import { CSSRelativeUnit, suffixed, toUnit } from '../../utilities';
import { SizeVariants } from '../createSpaces';

export type IconSizeToken = `icon${SizeVariants}` | 'iconInText';

export type IconSizes<Suffix extends string> = Record<
  Suffixed<Suffix, IconSizeToken>,
  string
>;

export const createIconSizes = <Suffix extends string = ''>(
  unit: CSSRelativeUnit = 'rem',
  suffix?: Suffix,
) => {
  const to = (value: number) => toUnit(value, unit);
  const s = suffixed(suffix);

  return {
    [`icon${s}`]: to(16),
    [`iconMajor${s}`]: to(24),
    [`iconMinor${s}`]: to(12),
    [`iconInText${s}`]: '1em',
  } as IconSizes<Suffix>;
};
