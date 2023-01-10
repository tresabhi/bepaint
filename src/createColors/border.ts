import { Colors } from 'types/colors';
import { ComponentStates } from 'types/componentStates';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import stripColors from 'utilities/stripColors';

export type BorderColorNames<Suffix extends string | undefined> = `border${
  | 'NonInteractive'
  | `Interactive${ComponentStates}`}${NormalizeSuffix<Suffix>}`;

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
    [`borderNonInteractive${s}`]: c[6],
    [`borderInteractive${s}`]: c[7],
    [`borderInteractiveHovered${s}`]: c[8],
    [`borderInteractivePressed${s}`]: c[9],
    [`borderInteractiveSelected${s}`]: c[9],
  } as BorderColors<Suffix>;
}
