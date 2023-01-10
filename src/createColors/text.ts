import { ColorsPallet } from 'types/colors';
import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import stripColors from 'utilities/stripColors';

export type TextColorNames<Suffix extends SuffixInput> = `text${
  | 'LowContrast'
  | 'HighContrast'}${NormalizeSuffix<Suffix>}`;

export type TextColors<Suffix extends SuffixInput> = Record<
  TextColorNames<Suffix>,
  string
>;

export function createTextColors<
  Name extends string,
  Suffix extends SuffixInput,
>(colors: ColorsPallet<Name>, suffix?: Suffix) {
  const s = normalizeSuffix(suffix);
  const c = stripColors(colors);

  return {
    [`textLowContrast${s}`]: c[11],
    [`textHighContrast${s}`]: c[12],
  } as TextColors<Suffix>;
}
