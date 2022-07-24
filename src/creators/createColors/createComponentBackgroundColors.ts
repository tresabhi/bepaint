import { ComponentStates, Scale } from '../../types';
import { parseScale } from '../../utilities';

export type ComponentBackgroundColorTokens<Suffix extends string = ''> =
  | `componentBackground${Suffix}`
  | `callToActionComponentBackground${Suffix}`;

export const createComponentBackgroundColors = <
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
    [`componentBackground${suffix}`]: scale[`${prefix}3`],
    [`componentBackgroundHover${suffix}`]: scale[`${prefix}4`],
    [`componentBackgroundActive${suffix}`]: scale[`${prefix}5`],
    [`callToActionComponentBackground${suffix}`]: scale[`${prefix}4`],
    [`callToActionComponentBackgroundHover${suffix}`]: scale[`${prefix}5`],
    [`callToActionComponentBackgroundActive${suffix}`]: scale[`${prefix}6`],
  } as unknown as Record<
    ComponentBackgroundColorTokens<`${ComponentStates}${Suffix}`>,
    string
  >;
};
