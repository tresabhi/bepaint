import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import toREM from 'utilities/toREM';

export type BodyFontSizeNames<Suffix extends SuffixInput> = `${
  | 'paragraph'
  | 'input'
  | 'label'
  | 'footnote'}${NormalizeSuffix<Suffix>}`;

export type BodyFontSizes<Suffix extends SuffixInput> = Record<
  BodyFontSizeNames<Suffix>,
  string
>;

export function createBodyFontSizes<Suffix extends SuffixInput>(
  scale = 1,
  suffix?: Suffix,
) {
  const s = normalizeSuffix(suffix);

  return {
    [`paragraph${s}`]: toREM(16 * scale),
    [`input${s}`]: toREM(16 * scale),
    [`label${s}`]: toREM(14 * scale),
    [`footnote${s}`]: toREM(12 * scale),
  } as BodyFontSizes<Suffix>;
}
