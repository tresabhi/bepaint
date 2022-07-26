import { createColorsDefaultOptions, CreateColorsOptions } from '.';
import { ComponentStates, Suffixed } from '../../types';
import { mergeOptions, parseScale, suffixed } from '../../utilities';

export type BorderColorToken = `${
  | 'componentNonInteractiveBorder'
  | 'componentInteractiveBorder'}${ComponentStates}`;

export type BorderColors<Suffix extends string> = Record<
  Suffixed<Suffix, BorderColorToken>,
  string
>;

export const createBorderColors = <Suffix extends string = ''>(
  options?: Partial<CreateColorsOptions<Suffix>>,
) => {
  const m = mergeOptions(createColorsDefaultOptions, options);
  const s = suffixed(m.suffix);
  const { p } = parseScale(m.scale);

  return {
    [`componentNonInteractiveBorder${s}`]: m.scale[`${p}6`],
    [`componentNonInteractiveBorderHover${s}`]: m.scale[`${p}7`],
    [`componentNonInteractiveBorderActive${s}`]: m.scale[`${p}8`],
    [`componentInteractiveBorder${s}`]: m.scale[`${p}7`],
    [`componentInteractiveBorderHover${s}`]: m.scale[`${p}8`],
    [`componentInteractiveBorderActive${s}`]: m.scale[`${p}8`],
  } as BorderColors<Suffix>;
};
