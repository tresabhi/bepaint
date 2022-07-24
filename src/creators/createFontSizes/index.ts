import { Range } from '../../types';
import { toUnit } from '../../utilities';

export type FontSizeToken<Suffix extends string = ''> =
  | `bodyText${Suffix}`
  | `heading${Suffix}${Range<1, 6>}`
  | `subheading${Suffix}`;

export type Device = 'desktop' | 'mobile';

/**
 * https://www.desmos.com/calculator/ke9joh9st5
 */
const d = (x: number, o: number) =>
  Math.round(-(Math.E ** 2) * Math.log(x) + o);

/**
 * Partially on
 * [Editor X font size guidelines](https://www.editorx.com/shaping-design/article/font-size)
 *
 * Heading sizes based on a
 * [natural logarithmic equation I created](https://www.desmos.com/calculator/ke9joh9st5)
 */
export const createFontSizes = <Suffix extends string>(
  device: Device,
  suffix?: Suffix,
) => {
  const to = (desktopValue: number, mobileValue: number) => {
    return toUnit(device === 'desktop' ? desktopValue : mobileValue, 'rem');
  };
  suffix = suffix ?? ('' as Suffix);

  return {
    [`bodyText${suffix}`]: to(16, 14),
    [`heading${suffix}1`]: to(d(1, 32), d(1, 28)),
    [`heading${suffix}2`]: to(d(2, 32), d(2, 28)),
    [`heading${suffix}3`]: to(d(3, 32), d(3, 28)),
    [`heading${suffix}4`]: to(d(4, 32), d(4, 28)),
    [`heading${suffix}5`]: to(d(5, 32), d(5, 28)),
    [`heading${suffix}6`]: to(d(6, 32), d(6, 28)),
    [`subheading${suffix}`]: to(18, 16),
  } as Record<FontSizeToken<Suffix>, string>;
};
