import { SuffixInput } from 'types/suffix';
import { MagnitudeVariants, RelationVariants } from 'types/tokenVariants';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import toREM from 'utilities/toREM';

export type GapNames<Suffix extends SuffixInput> =
  `gap${RelationVariants}${MagnitudeVariants}${NormalizeSuffix<Suffix>}`;

export type Gaps<Suffix extends SuffixInput> = Record<GapNames<Suffix>, string>;

export function createGaps<Suffix extends SuffixInput>(
  scale = 1,
  suffix?: Suffix,
) {
  const s = normalizeSuffix(suffix);

  return {
    [`gapRelatedRegular${s}`]: toREM(4 * scale),
    [`gapRelatedMajor${s}`]: toREM(8 * scale),
    [`gapRelatedMinor${s}`]: toREM(2 * scale),
    [`gapUnrelatedRegular${s}`]: toREM(8 * scale),
    [`gapUnrelatedMajor${s}`]: toREM(16 * scale),
    [`gapUnrelatedMinor${s}`]: toREM(4 * scale),
  } as Gaps<Suffix>;
}
