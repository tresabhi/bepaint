import { toUnit } from './toUnit';

export const toRem = <Value extends number>(value: Value) => {
  return toUnit(value, 'rem');
};
