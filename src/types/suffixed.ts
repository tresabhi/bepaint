export type Suffixed<
  Suffix extends string,
  Prefix extends string = '',
> = Suffix extends '' ? Prefix : `${Prefix}_${Suffix}`;
