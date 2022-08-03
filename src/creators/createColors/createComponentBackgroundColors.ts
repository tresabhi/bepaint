import { merge } from 'lodash';
import { createColorsDefaultOptions, CreateColorsOptions } from '.';
import { Suffixed } from '../../types';
import { parseScale, suffixed } from '../../utilities';

export type ComponentBackgroundColorToken =
  | 'componentBackground'
  | 'componentCallToActionBackground';

export type ComponentBackgroundColors<Suffix extends string> = Record<
  Suffixed<Suffix, ComponentBackgroundColorToken>,
  string
>;

export const createComponentBackgroundColors = <Suffix extends string = ''>(
  options?: Partial<CreateColorsOptions<Suffix>>,
) => {
  const m = merge(createColorsDefaultOptions, options);
  const s = suffixed(m.suffix);
  const { p } = parseScale(m.scale);

  return {
    [`componentBackground${s}`]: m.scale[`${p}3`],
    [`componentBackgroundHover${s}`]: m.scale[`${p}4`],
    [`componentBackgroundActive${s}`]: m.scale[`${p}5`],
    [`componentCallToActionBackground${s}`]: m.scale[`${p}4`],
    [`componentCallToActionBackgroundHover${s}`]: m.scale[`${p}5`],
    [`componentCallToActionBackgroundActive${s}`]: m.scale[`${p}6`],
  } as ComponentBackgroundColors<Suffix>;
};
