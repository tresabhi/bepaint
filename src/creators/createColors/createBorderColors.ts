import { Scale, Suffixed } from '../../types';
import { parseScale, suffixed } from '../../utilities';

export type BorderColorToken =
  | 'nonInteractiveComponentBorder'
  | 'interactiveComponentBorder';

export type BorderColors<Suffix extends string> = Record<
  Suffixed<Suffix, BorderColorToken>,
  string
>;

export const createBorderColors = <
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
    [`nonInteractiveComponentBorder${s}`]: scale[`${p}6`],
    [`nonInteractiveComponentBorderHover${s}`]: scale[`${p}7`],
    [`nonInteractiveComponentBorderActive${s}`]: scale[`${p}8`],
    [`interactiveComponentBorder${s}`]: scale[`${p}6`],
    [`interactiveComponentBorderHover${s}`]: scale[`${p}7`],
    [`interactiveComponentBorderActive${s}`]: scale[`${p}8`],
  } as unknown as BorderColors<Suffix>;
};
