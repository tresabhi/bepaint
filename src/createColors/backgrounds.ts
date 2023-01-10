import { Colors } from 'types/colors';
import { NormalizeSuffix } from 'types/normalizeSuffix';
import { normalizeSuffix } from 'utilities/normalizeSuffix';

export type CreateBackgroundColors<Suffix extends string | undefined> = `${
  | 'app'
  | 'table'
  | 'code'
  | 'card'
  | 'sidebar'
  | 'canvas'}Background${1 | 2}${NormalizeSuffix<Suffix>}`;

export function createBackgroundColors<
  Name extends string,
  Suffix extends string | undefined,
>(colors: Colors<Name>, suffix?: Suffix) {
  const s = normalizeSuffix(suffix);

  return {
    [`appBackground1${s}`]: colors.[``]
  } as CreateBackgroundColors<Suffix>;
}
