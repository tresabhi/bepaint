import { Scale, Suffixed } from '../../types';
import { parseScale, suffixed } from '../../utilities';

export type ComponentBackgroundColorToken =
  | 'componentBackground'
  | 'callToActionComponentBackground';

export type ComponentBackgroundColors<Suffix extends string> = Record<
  Suffixed<Suffix, ComponentBackgroundColorToken>,
  string
>;

export const createComponentBackgroundColors = <
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
    [`componentBackground${s}`]: scale[`${p}3`],
    [`componentBackgroundHover${s}`]: scale[`${p}4`],
    [`componentBackgroundActive${s}`]: scale[`${p}5`],
    [`callToActionComponentBackground${s}`]: scale[`${p}4`],
    [`callToActionComponentBackgroundHover${s}`]: scale[`${p}5`],
    [`callToActionComponentBackgroundActive${s}`]: scale[`${p}6`],
  } as unknown as ComponentBackgroundColors<Suffix>;
};
