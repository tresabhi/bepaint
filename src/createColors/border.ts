import { ColorsPallet } from 'types/colors';
import { ComponentStates } from 'types/componentStates';
import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import stripColors from 'utilities/stripColors';

export type BorderColorNames<Suffix extends SuffixInput> = `border${
  | 'NonInteractive'
  | `Interactive${ComponentStates}`}${NormalizeSuffix<Suffix>}`;

export type BorderColors<Suffix extends SuffixInput> = Record<
  BorderColorNames<Suffix>,
  string
>;

export function createBorderColors<
  Name extends string,
  Suffix extends SuffixInput,
>(colors: ColorsPallet<Name>, suffix?: Suffix) {
  const s = normalizeSuffix(suffix);
  const c = stripColors(colors);

  return {
    [`borderNonInteractive${s}`]: c[6],
    [`borderInteractive${s}`]: c[7],
    [`borderInteractiveHovered${s}`]: c[8],
    [`borderInteractivePressed${s}`]: c[9],
    [`borderInteractiveSelected${s}`]: c[9],
  } as BorderColors<Suffix>;
}
