import { Scale, Suffixed } from '../../types';
import { parseScale, suffixed } from '../../utilities';

export type BorderColorToken =
  | 'componentNonInteractiveBorder'
  | 'componentInteractiveBorder';

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
    [`componentNonInteractiveBorder${s}`]: scale[`${p}6`],
    [`componentNonInteractiveBorderHover${s}`]: scale[`${p}7`],
    [`componentNonInteractiveBorderActive${s}`]: scale[`${p}8`],
    [`componentInteractiveBorder${s}`]: scale[`${p}6`],
    [`componentInteractiveBorderHover${s}`]: scale[`${p}7`],
    [`componentInteractiveBorderActive${s}`]: scale[`${p}8`],
  } as unknown as BorderColors<Suffix>;
};
