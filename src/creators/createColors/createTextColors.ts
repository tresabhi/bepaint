import { Scale } from '../../types';
import { parseScale } from '../../utilities';

export type TextColorTokens<Suffix extends string = ''> =
  | `lowContrastText${Suffix}`
  | `highContrastText${Suffix}`;

export const createTextColors = <
  Prefix extends string,
  NamedScale extends Scale<Prefix>,
  Suffix extends string = '',
>(
  scale: NamedScale,
  suffix?: Suffix,
) => {
  suffix = suffix ?? ('' as Suffix);
  const { prefix } = parseScale<Prefix>(scale);

  return {
    [`lowContrastText${suffix}`]: scale[`${prefix}11`],
    [`highContrastText${suffix}`]: scale[`${prefix}12`],
  } as unknown as Record<TextColorTokens<Suffix>, string>;
};
