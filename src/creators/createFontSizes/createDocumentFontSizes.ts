import { merge } from 'lodash';
import { createFontSizesDefaultOptions, CreateFontSizesOptions } from '.';
import { Suffixed } from '../../types';
import { suffixed, toRem } from '../../utilities';

export type DocumentFontSizeToken =
  | 'paragraph'
  | 'code'
  | 'codeInline'
  | 'footnote'
  | 'label'
  | 'compact'
  | 'callToAction';

export type DocumentFontSizes<Suffix extends string> = Record<
  Suffixed<Suffix, DocumentFontSizeToken>,
  string
>;

/**
 * Default font sizes are designed for desktop. Mobile font sizes should be
 * about `7/8` (`0.875`) of the desktop size.
 *
 * Based on
 * [Editor X font size guidelines](https://www.editorx.com/shaping-design/article/font-size)
 */
export const createDocumentFontSizes = <Suffix extends string = ''>(
  options?: Partial<CreateFontSizesOptions<Suffix>>,
) => {
  const m = merge(createFontSizesDefaultOptions, options);
  const s = suffixed(m.suffix);

  return {
    [`paragraph${s}`]: toRem(16),
    [`code${s}`]: toRem(14),
    [`codeInline${s}`]: `calc(1em - ${toRem(2)})`,
    [`footnote${s}`]: toRem(12),
    [`label${s}`]: toRem(14),
    [`compact${s}`]: toRem(12),
    [`callToAction${s}`]: toRem(20),
  } as DocumentFontSizes<Suffix>;
};
