import { SuffixInput } from 'types/suffix';
import { MagnitudeVariants, RelationVariants } from 'types/tokenVariants';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import toREM from 'utilities/toREM';

export type MarginNames<Suffix extends SuffixInput> =
  `margin${RelationVariants}${MagnitudeVariants}${NormalizeSuffix<Suffix>}`;

export type Margins<Suffix extends SuffixInput> = Record<
  MarginNames<Suffix>,
  string
>;

export function createMargins<Suffix extends SuffixInput>(
  scale = 1,
  suffix?: Suffix,
) {
  const s = normalizeSuffix(suffix);

  return {
    [`marginRelatedRegular${s}`]: toREM(2 * scale),
    [`marginRelatedMajor${s}`]: toREM(4 * scale),
    [`marginRelatedMinor${s}`]: toREM(1 * scale),
    [`marginUnrelatedRegular${s}`]: toREM(4 * scale),
    [`marginUnrelatedMajor${s}`]: toREM(8 * scale),
    [`marginUnrelatedMinor${s}`]: toREM(2 * scale),
  } as Margins<Suffix>;
}
