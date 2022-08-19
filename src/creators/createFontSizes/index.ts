import { CreatorOptions } from '../../types';
import { creatorDefaultOptions } from '../../utilities';
import { createDocumentFontSizes } from './createDocumentFontSizes';
import { createHeadingFontSizes } from './createHeadingFontSizes';

export * from './createDocumentFontSizes';
export * from './createHeadingFontSizes';

export interface CreateFontSizesOptions<Suffix extends string>
  extends CreatorOptions<Suffix> {
  scale: number;
}

export const createFontSizesDefaultOptions: CreateFontSizesOptions<string> = {
  ...creatorDefaultOptions,

  scale: 1,
};

export const createFontSizes = <Suffix extends string = ''>(
  options?: Partial<CreateFontSizesOptions<Suffix>>,
) => {
  return {
    ...createDocumentFontSizes(options),
    ...createHeadingFontSizes(options),
  };
};
