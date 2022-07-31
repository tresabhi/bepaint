import { CSSRelativeUnit } from '../../utilities';
import { createIconSizes } from './createIconSizes';

export * from './createIconSizes';

export const createSizes = <Suffix extends string = ''>(
  unit: CSSRelativeUnit = 'rem',
  suffix?: Suffix,
) => {
  return {
    ...createIconSizes(unit, suffix),
  };
};
