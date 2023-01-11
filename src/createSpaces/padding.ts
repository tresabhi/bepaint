import { SuffixInput } from 'types/suffix';
import { MagnitudeVariants } from 'types/tokenVariants';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import toREM from 'utilities/toREM';

export type PaddingNames<Suffix extends SuffixInput> =
  `padding${MagnitudeVariants}${NormalizeSuffix<Suffix>}`;

export type Paddings<Suffix extends SuffixInput> = Record<
  PaddingNames<Suffix>,
  string
>;

export function createPaddings<Suffix extends SuffixInput>(
  scale = 1,
  suffix?: Suffix,
) {
  const s = normalizeSuffix(suffix);

  return {
    [`paddingRegular${s}`]: toREM(8 * scale),
    [`paddingMajor${s}`]: toREM(16 * scale),
    [`paddingMinor${s}`]: toREM(4 * scale),
  } as Paddings<Suffix>;
}
