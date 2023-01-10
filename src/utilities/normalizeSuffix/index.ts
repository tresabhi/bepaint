import { SuffixInput } from 'types/suffix';

export type NormalizeSuffix<Suffix extends SuffixInput> =
  Suffix extends undefined ? '' : `_${Suffix}`;

export default function normalizeSuffix<Suffix extends string>(
  suffix?: Suffix,
) {
  return (suffix === undefined ? '' : `_${suffix}`) as NormalizeSuffix<Suffix>;
}
