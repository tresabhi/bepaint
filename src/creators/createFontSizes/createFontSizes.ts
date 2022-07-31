import { Suffixed } from '../../types';
import { suffixed, toUnit } from '../../utilities';

export type FontSizeToken =
  | 'paragraph'
  | 'code'
  | 'codeInline'
  | 'footnote'
  | 'label'
  | 'componentInteractive'
  | 'componentCompact'
  | 'componentCallToAction';

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
    [`paragraph${s}`]: to(16),
    [`code${s}`]: to(14),
    [`codeInline${s}`]: `calc(1em - ${to(2)})`,
    [`footnote${s}`]: to(12),
    [`label${s}`]: to(14),
    [`componentInteractive${s}`]: to(16),
    [`componentCompact${s}`]: to(12),
    [`componentCallToAction${s}`]: to(20),
  } as FontSizes<Suffix>;
};
