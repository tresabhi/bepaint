import { Range } from '../types';
import { safeMinMaxInts } from '../utilities';

export const createIndeces = <Min extends number, Max extends number>(
  min: Min,
  max: Max,
) => {
  const { safeMin, safeMax } = safeMinMaxInts(min, max);
  const sizes: Record<number, number> = {};

  let index = safeMin;
  while (index !== safeMax + 1) {
    sizes[index] = index;
    index++;
  }

  // @ts-ignore
  return sizes as Record<Range<Min, Max>, number>;
};
