import { ColorsPallet } from 'types/colors';
import { ComponentStates } from 'types/componentStates';
import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import stripColors from 'utilities/stripColors';

export type ComponentColorNames<Suffix extends SuffixInput> = `component${
  | ''
  | 'CallToAction'
  | 'Solid'}${ComponentStates}${NormalizeSuffix<Suffix>}`;

export type ComponentColors<Suffix extends SuffixInput> = Record<
  ComponentColorNames<Suffix>,
  string
>;

export function createComponentColors<
  Name extends string,
  Suffix extends SuffixInput,
>(colors: ColorsPallet<Name>, suffix?: Suffix) {
  const s = normalizeSuffix(suffix);
  const c = stripColors(colors);

  return {
    [`component${s}`]: c[3],
    [`componentHovered${s}`]: c[4],
    [`componentPressed${s}`]: c[5],
    [`componentSelected${s}`]: c[5],
    [`componentCallToAction${s}`]: c[4],
    [`componentCallToActionHovered${s}`]: c[5],
    [`componentCallToActionPressed${s}`]: c[6],
    [`componentCallToActionSelected${s}`]: c[6],
    [`componentSolid${s}`]: c[9],
    [`componentSolidHovered${s}`]: c[10],
    [`componentSolidPressed${s}`]: c[11],
    [`componentSolidSelected${s}`]: c[11],
  } as ComponentColors<Suffix>;
}
