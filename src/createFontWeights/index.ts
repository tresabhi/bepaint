import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';

export type FontWeightNames<Suffix extends SuffixInput> = `${
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'black'}${NormalizeSuffix<Suffix>}`;

export type FontWeights<Suffix extends SuffixInput> = Record<
  FontWeightNames<Suffix>,
  number
>;

export function createFontWeights<Suffix extends SuffixInput>(suffix?: Suffix) {
  const s = normalizeSuffix(suffix);

  return {
    [`thin${s}`]: 100,
    [`extraLight${s}`]: 200,
    [`light${s}`]: 300,
    [`regular${s}`]: 400,
    [`medium${s}`]: 500,
    [`semiBold${s}`]: 600,
    [`bold${s}`]: 700,
    [`extraBold${s}`]: 800,
    [`black${s}`]: 900,
  } as FontWeights<Suffix>;
}
