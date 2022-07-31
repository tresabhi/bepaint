import { Scale, Suffixed } from '../../types';
import { parseScale, suffixed } from '../../utilities';

export type TextColorToken = 'textLowContrast' | 'textHighContrast';

export type TextColors<Suffix extends string> = Record<
  Suffixed<Suffix, TextColorToken>,
  string
>;

export const createTextColors = <
  Prefix extends string,
  NamedScale extends Scale<Prefix>,
  Suffix extends string = '',
>(
  scale: NamedScale,
  suffix?: Suffix,
) => {
  const s = suffixed(suffix);
  const { p } = parseScale<Prefix>(scale);

  return {
    [`textLowContrast${s}`]: scale[`${p}11`],
    [`textHighContrast${s}`]: scale[`${p}12`],
  } as unknown as TextColors<Suffix>;
};
