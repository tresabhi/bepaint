import { merge } from 'lodash';
import { createColorsDefaultOptions, CreateColorsOptions } from '.';
import { Suffixed } from '../../types';
import { parseScale, suffixed } from '../../utilities';

export type TextColorToken = 'textLowContrast' | 'textHighContrast';

export type TextColors<Suffix extends string> = Record<
  Suffixed<Suffix, TextColorToken>,
  string
>;

export const createTextColors = <Suffix extends string = ''>(
  options?: Partial<CreateColorsOptions<Suffix>>,
) => {
  const m = merge(createColorsDefaultOptions, options);
  const s = suffixed(m.suffix);
  const { p } = parseScale(m.scale);

  return {
    [`textLowContrast${s}`]: m.scale[`${p}11`],
    [`textHighContrast${s}`]: m.scale[`${p}12`],
  } as TextColors<Suffix>;
};
