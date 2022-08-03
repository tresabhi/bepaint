import { merge } from 'lodash';
import { createColorsDefaultOptions, CreateColorsOptions } from '.';
import { Suffixed } from '../../types';
import { parseScale, suffixed } from '../../utilities';

export type BackgroundColorToken = `${
  | 'appBackground'
  | 'tableStripeBackground'
  | 'codeBlockBackground'
  | 'cardBackground'
  | 'sidebarBackground'
  | 'canvasBackground'}${1 | 2}`;

export type BackgroundColors<Suffix extends string> = Record<
  Suffixed<Suffix, BackgroundColorToken>,
  string
>;

export const createBackgroundColors = <Suffix extends string = ''>(
  options?: Partial<CreateColorsOptions<Suffix>>,
) => {
  const m = merge(createColorsDefaultOptions, options);
  const s = suffixed(m.suffix);
  const { p } = parseScale(m.scale);

  return {
    [`appBackground${s}1`]: m.scale[`${p}1`],
    [`appBackground${s}2`]: m.scale[`${p}2`],
    [`tableStripeBackground${s}1`]: m.scale[`${p}1`],
    [`tableStripeBackground${s}2`]: m.scale[`${p}2`],
    [`codeBlockBackground${s}1`]: m.scale[`${p}1`],
    [`codeBlockBackground${s}2`]: m.scale[`${p}2`],
    [`cardBackground${s}1`]: m.scale[`${p}1`],
    [`cardBackground${s}2`]: m.scale[`${p}2`],
    [`sidebarBackground${s}1`]: m.scale[`${p}1`],
    [`sidebarBackground${s}2`]: m.scale[`${p}2`],
    [`canvasBackground${s}1`]: m.scale[`${p}1`],
    [`canvasBackground${s}2`]: m.scale[`${p}2`],
  } as BackgroundColors<Suffix>;
};
