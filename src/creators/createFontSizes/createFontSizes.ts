import { Suffixed } from '../../types';
import { suffixed, toUnit } from '../../utilities';

export type FontSizeToken =
  | 'title'
  | 'paragraph'
  | 'code'
  | 'codeInline'
  | 'footnote'
  | 'callToAction';

export type FontSizes<Suffix extends string> = Record<
  Suffixed<Suffix, FontSizeToken>,
  string
>;

/**
 * Based on
 * [Editor X font size guidelines](https://www.editorx.com/shaping-design/article/font-size)
 */
export const createFontSizes = <Suffix extends string = ''>(
  suffix?: Suffix,
) => {
  const s = suffixed(suffix);
  const to = (value: number) => toUnit(value, 'rem');

  return {
    [`title${s}`]: to(48),
    [`paragraph${s}`]: to(16),
    [`code${s}`]: to(14),
    [`codeInline${s}`]: to(16),
    [`footnote${s}`]: to(12),
    [`callToAction${s}`]: to(20),
  } as FontSizes<Suffix>;
};
