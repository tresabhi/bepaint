import { Scale, Suffixed } from '../../types';
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

export const createBackgroundColors = <
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
    [`appBackground${s}1`]: scale[`${p}1`],
    [`appBackground${s}2`]: scale[`${p}2`],
    [`tableStripeBackground${s}1`]: scale[`${p}1`],
    [`tableStripeBackground${s}2`]: scale[`${p}2`],
    [`codeBlockBackground${s}1`]: scale[`${p}1`],
    [`codeBlockBackground${s}2`]: scale[`${p}2`],
    [`cardBackground${s}1`]: scale[`${p}1`],
    [`cardBackground${s}2`]: scale[`${p}2`],
    [`sidebarBackground${s}1`]: scale[`${p}1`],
    [`sidebarBackground${s}2`]: scale[`${p}2`],
    [`canvasBackground${s}1`]: scale[`${p}1`],
    [`canvasBackground${s}2`]: scale[`${p}2`],
  } as unknown as BackgroundColors<Suffix>;
};
