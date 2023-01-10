import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import toREM from 'utilities/toREM';

export type RadiusNames<Suffix extends SuffixInput> = `${
  | 'regular'
  | `${'sharp' | 'blunt'}${'' | 'er'}`}${NormalizeSuffix<Suffix>}`;

export type Radii<Suffix extends SuffixInput> = Record<
  RadiusNames<Suffix>,
  string
>;

export function createRadii<Suffix extends SuffixInput>(
  scale = 1,
  suffix?: Suffix,
) {
  const s = normalizeSuffix(suffix);

  return {
    [`regular${s}`]: toREM(4 * scale),
    [`sharp${s}`]: toREM(2 * scale),
    [`sharper${s}`]: toREM(1 * scale),
    [`blunt${s}`]: toREM(8 * scale),
    [`blunter${s}`]: toREM(16 * scale),
  } as Radii<Suffix>;
}
