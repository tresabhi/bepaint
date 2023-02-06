import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import toREM from 'utilities/toREM';

export type BorderWidthNames<Suffix extends SuffixInput> = `${
  | 'thin'
  | 'regular'
  | 'thick'}${NormalizeSuffix<Suffix>}`;

export type BorderWidths<Suffix extends SuffixInput> = Record<
  BorderWidthNames<Suffix>,
  string
>;

export function createBorderWidths<Suffix extends SuffixInput>(
  scale = 1,
  suffix?: Suffix,
) {
  const s = normalizeSuffix(suffix);

  return {
    [`thin${s}`]: toREM(0.5 * scale),
    [`regular${s}`]: toREM(1 * scale),
    [`thick${s}`]: toREM(2 * scale),
  } as BorderWidths<Suffix>;
}
