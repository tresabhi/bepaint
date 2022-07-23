import { Scale } from '../../types/scale';
import { parseScale } from '../../utilities';

export type BackgroundColorTokens<Suffix extends string> =
  | `appBackground${Suffix}`
  | `tableStripeBackground${Suffix}`
  | `codeBlockBackground${Suffix}`
  | `cardBackground${Suffix}`
  | `sidebarBackground${Suffix}`
  | `canvasBackground${Suffix}`;

export const createBackgroundColors = <
  Prefix extends string,
  NamedScale extends Scale<Prefix>,
  Suffix extends string = '',
>(
  scale: NamedScale,
  suffix?: Suffix,
) => {
  const { prefix } = parseScale<Prefix>(scale);

  return {
    [`appBackground${suffix}1`]: scale[`${prefix}1`],
    [`appBackground${suffix}2`]: scale[`${prefix}2`],
    [`tableStripeBackground${suffix}1`]: scale[`${prefix}1`],
    [`tableStripeBackground${suffix}2`]: scale[`${prefix}2`],
    [`codeBlockBackground${suffix}1`]: scale[`${prefix}1`],
    [`codeBlockBackground${suffix}2`]: scale[`${prefix}2`],
    [`cardBackground${suffix}1`]: scale[`${prefix}1`],
    [`cardBackground${suffix}2`]: scale[`${prefix}2`],
    [`sidebarBackground${suffix}1`]: scale[`${prefix}1`],
    [`sidebarBackground${suffix}2`]: scale[`${prefix}2`],
    [`canvasBackground${suffix}1`]: scale[`${prefix}1`],
    [`canvasBackground${suffix}2`]: scale[`${prefix}2`],
  } as unknown as Record<BackgroundColorTokens<`${Suffix}${1 | 2}`>, string>;
};
