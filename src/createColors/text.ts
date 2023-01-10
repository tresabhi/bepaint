import { Colors } from 'types/colors';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import stripColors from 'utilities/stripColors';

export type BorderColorNames<Suffix extends string | undefined> = `text${
  | 'LowContrast'
  | 'HighContrast'}${NormalizeSuffix<Suffix>}`;

export type BorderColors<Suffix extends string | undefined> = Record<
  BorderColorNames<Suffix>,
  string
>;

export function createBorderColors<
  Name extends string,
  Suffix extends string | undefined,
>(colors: Colors<Name>, suffix?: Suffix) {
  const s = normalizeSuffix(suffix);
  const c = stripColors(colors);

  return {
    [`textLowContrast${s}`]: c[11],
    [`textHighContrast${s}`]: c[12],
  } as BorderColors<Suffix>;
}
