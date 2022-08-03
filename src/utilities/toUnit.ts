export type CSSUnit = 'px' | 'em' | 'rem' | 'in' | 'cm' | 'mm' | 'pt' | 'pc';

export const CSSUnitRatios = new Map<CSSUnit, number>([
  ['px', 1], // px to px
  ['em', 1 / 16], // px to em
  ['rem', 1 / 16], // px to rem
  ['in', 1 / 96], // px to in
  ['cm', (1 / 96) * 2.54], // px to in to cm
  ['mm', (1 / 96) * 2.54 * 10], // px to in to cm to mm
  ['pt', (1 / 96) * 72], // px to in to pt
  ['pc', ((1 / 96) * 72) / 12], // px to in to pt to pc
]);

export const toUnit = <Unit extends CSSUnit>(value: number, unit: Unit) => {
  return value === 0
    ? '0'
    : (`${
        (CSSUnitRatios.get(unit) ?? 1) * value
      }${unit}` as `${number}${Unit}`);
};
