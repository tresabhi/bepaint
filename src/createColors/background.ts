import { ColorsPallet } from 'types/colors';
import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import stripColors from 'utilities/stripColors';

export type BackgroundColorNames<Suffix extends SuffixInput> = `${
  | 'app'
  | 'table'
  | 'code'
  | 'card'
  | 'sidebar'
  | 'canvas'}Background${1 | 2}${NormalizeSuffix<Suffix>}`;

export type BackgroundColors<Suffix extends SuffixInput> = Record<
  BackgroundColorNames<Suffix>,
  string
>;

export function createBackgroundColors<Suffix extends SuffixInput>(
  colors: ColorsPallet<string>,
  suffix?: Suffix,
) {
  const s = normalizeSuffix(suffix);
  const c = stripColors(colors);

  return {
    [`appBackground1${s}`]: c[1],
    [`appBackground2${s}`]: c[2],
    [`tableBackground1${s}`]: c[1],
    [`tableBackground2${s}`]: c[2],
    [`codeBackground1${s}`]: c[1],
    [`codeBackground2${s}`]: c[2],
    [`cardBackground1${s}`]: c[1],
    [`cardBackground2${s}`]: c[2],
    [`sidebarBackground1${s}`]: c[1],
    [`sidebarBackground2${s}`]: c[2],
    [`canvasBackground1${s}`]: c[1],
    [`canvasBackground2${s}`]: c[2],
  } as BackgroundColors<Suffix>;
}
