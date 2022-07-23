import { Range } from '../types/range';
import { safeMinMaxInts } from '../utilities';

export type CSSUnit = 'em' | 'rem' | 'px';

const pxToUnitTable = new Map<CSSUnit, number>([
  ['em', 1 / 16],
  ['rem', 1 / 16],
  ['px', 1],
]);

export const createSizes = <Min extends number, Max extends number>(
  min: Min,
  max: Max,
  unit: CSSUnit = 'rem',
) => {
  const { safeMin, safeMax } = safeMinMaxInts(min, max);
  const sizes: Record<number, string> = {};

  let index = safeMin;
  while (index !== safeMax + 1) {
    sizes[index] = `${index * (pxToUnitTable.get(unit) ?? 1)}${unit}`;
    index++;
  }

  // @ts-ignore
  return sizes as Record<Range<Min, Max>, string>;
};
