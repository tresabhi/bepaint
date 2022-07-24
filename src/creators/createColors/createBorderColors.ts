import { ComponentStates } from '../../types';
import { Scale } from '../../types/scale';
import { parseScale } from '../../utilities';

export type BorderColorTokens<Suffix extends string> =
  | `nonInteractiveComponentBorder${Suffix}`
  | `interactiveComponentBorder${Suffix}`;

export const createBorderColors = <
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
    [`nonInteractiveComponentBorder${suffix}`]: scale[`${prefix}6`],
    [`nonInteractiveComponentBorderHover${suffix}`]: scale[`${prefix}7`],
    [`nonInteractiveComponentBorderActive${suffix}`]: scale[`${prefix}8`],
    [`interactiveComponentBorder${suffix}`]: scale[`${prefix}6`],
    [`interactiveComponentBorderHover${suffix}`]: scale[`${prefix}7`],
    [`interactiveComponentBorderActive${suffix}`]: scale[`${prefix}8`],
  } as unknown as Record<
    BorderColorTokens<`${ComponentStates}${Suffix}`>,
    string
  >;
};
