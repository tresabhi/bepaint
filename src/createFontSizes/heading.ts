import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import toREM from 'utilities/toREM';

export type HeadingFontSizeNames<Suffix extends SuffixInput> = `${
  | `heading${1 | 2 | 3 | 4 | 5 | 6}`
  | 'subheading'}${NormalizeSuffix<Suffix>}`;

export type HeadingFontSizes<Suffix extends SuffixInput> = Record<
  HeadingFontSizeNames<Suffix>,
  string
>;

export function createHeadingFontSizes<Suffix extends SuffixInput>(
  scale = 1,
  suffix?: Suffix,
) {
  const s = normalizeSuffix(suffix);

  return {
    [`heading1${s}`]: toREM(32 * scale),
    [`heading2${s}`]: toREM(24 * scale),
    [`heading3${s}`]: toREM(18 * scale),
    [`heading4${s}`]: toREM(16 * scale),
    [`heading5${s}`]: toREM(12 * scale),
    [`heading6${s}`]: toREM(10 * scale),
    [`subheading${s}`]: toREM(18 * scale),
  } as HeadingFontSizes<Suffix>;
}
