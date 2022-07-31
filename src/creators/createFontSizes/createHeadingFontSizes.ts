import { Range, Suffixed } from '../../types';
import { suffixed, toUnit } from '../../utilities';

export type HeadingFontSizeToken =
  | 'title'
  | `heading${Range<1, 6>}`
  | 'subheading';

export type HeadingFontSizes<Suffix extends string> = Record<
  Suffixed<Suffix, HeadingFontSizeToken>,
  string
>;

/**
 * Based on a
 * [natural logarithmic equation](https://www.desmos.com/calculator/ke9joh9st5)
 * I created
 *
 * Recommended values:
 * - Desktop
 *   - Coefficient: `-10`
 *   - Vertical Intercept: `32`
 * - Mobile
 *   - Coefficient: `-8`
 *   - Vertical Intercept: `22`
 *
 * @param coefficient the rate at which heading sizes decrease in size
 * @param verticalIntercept the size of the first heading
 * @param precision step size in rounding (0 is max precision and the default)
 */
export const createHeadingFontSizes = <Suffix extends string = ''>(
  coefficient = -10,
  verticalIntercept = 32,
  precision = 0,
  suffix?: Suffix,
) => {
  const s = suffixed(suffix);
  const to = (x: number) => {
    const value = coefficient * Math.log(x) + verticalIntercept;
    const rounded =
      precision === 0 ? value : Math.round(value / precision) * precision;

    return toUnit(Math.max(rounded, 0), 'rem');
  };

  return {
    [`title${s}`]: to(0.25),
    [`heading${s}1`]: to(1),
    [`heading${s}2`]: to(2),
    [`heading${s}3`]: to(3),
    [`heading${s}4`]: to(4),
    [`heading${s}5`]: to(5),
    [`heading${s}6`]: to(6),
    [`subheading${s}`]: to(2.5),
  } as HeadingFontSizes<Suffix>;
};
