import { ColorsPallet } from 'types/colors';
import { ComponentStates } from 'types/componentStates';
import { ComponentUsabilityNoCap } from 'types/componentUsability';
import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import stripColors from 'utilities/stripColors';
import toREM from 'utilities/toREM';

export type BorderStyleNames<Suffix extends SuffixInput> =
  `${ComponentUsabilityNoCap<ComponentStates>}${NormalizeSuffix<Suffix>}`;

export type BorderStyles<Suffix extends SuffixInput> = Record<
  BorderStyleNames<Suffix>,
  string
>;

export function createBorderStyles<Suffix extends SuffixInput>(
  colors: ColorsPallet<string>,
  borderStyles = `solid ${toREM(1)}`,
  suffix?: Suffix,
) {
  const s = normalizeSuffix(suffix);
  const c = stripColors(colors);

  return {
    [`nonInteractive${s}`]: `${c[6]} ${borderStyles}`,
    [`interactive${s}`]: `${c[7]} ${borderStyles}`,
    [`interactiveHover${s}`]: `${c[8]} ${borderStyles}`,
    [`interactiveActive${s}`]: `${c[9]} ${borderStyles}`,
    [`interactiveFocused${s}`]: `${c[9]} ${borderStyles}`,
  } as BorderStyles<Suffix>;
}
