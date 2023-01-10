export type NormalizeSuffix<Name extends string | undefined> =
  Name extends undefined ? '' : `_${Name}`;

export default function normalizeSuffix<Suffix extends string>(
  suffix?: Suffix,
) {
  return (suffix === undefined ? '' : `_${suffix}`) as NormalizeSuffix<Suffix>;
}
