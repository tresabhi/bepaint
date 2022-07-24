import { CSSConvertibleUnit, toUnit } from '../../utilities';
import { SizeVariants } from '../createSpaces';

export type SizeToken<Suffix extends string = ''> =
  | `icon${SizeVariants}${Suffix}`
  | `iconInText${Suffix}`;

export const createSizes = <Suffix extends string = ''>(
  unit: CSSConvertibleUnit = 'rem',
  suffix?: Suffix,
) => {
  const to = (value: number) => toUnit(value, unit);
  suffix = suffix ?? ('' as Suffix);

  return {
    [`icon${suffix}`]: to(16),
    [`iconMajor${suffix}`]: to(32),
    [`iconMinor${suffix}`]: to(8),
    [`iconInText${suffix}`]: '1em',
  } as Record<SizeToken<Suffix>, string>;
};
