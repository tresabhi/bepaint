import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';

export type SizeNames<Suffix extends SuffixInput> =
  `inTextIcon${NormalizeSuffix<Suffix>}`;

export type Sizes<Suffix extends SuffixInput> = Record<
  SizeNames<Suffix>,
  string
>;

export function createSizes<Suffix extends SuffixInput>(
  scale = 1,
  suffix?: Suffix,
) {
  const s = normalizeSuffix(suffix);

  return {
    [`inTextIcon${s}`]: `${scale}em`,
  } as Sizes<Suffix>;
}
