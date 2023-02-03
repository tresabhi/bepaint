import { BorderColorNames } from 'createColors';
import { ColorsPallet } from 'types/colors';
import { ComponentStates } from 'types/componentStates';
import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import stripColors from 'utilities/stripColors';
import toREM from 'utilities/toREM';

export type BorderStyleNames<Suffix extends SuffixInput> = `${
  | 'NonInteractive'
  | `Interactive${ComponentStates}`}${NormalizeSuffix<Suffix>}`;

export type BorderStyles<Suffix extends SuffixInput> = Record<
  BorderColorNames<Suffix>,
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
    [`interactiveHovered${s}`]: `${c[8]} ${borderStyles}`,
    [`interactiveActive${s}`]: `${c[9]} ${borderStyles}`,
    [`interactiveFocused${s}`]: `${c[9]} ${borderStyles}`,
  } as BorderStyles<Suffix>;
}
