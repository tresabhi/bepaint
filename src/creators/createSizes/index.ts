import { creatorDefaultOptions, CreatorOptions } from '..';
import { CSSLengthUnit } from '../../utilities';
import { createIconSizes } from './createIconSizes';

export * from './createIconSizes';

export interface CreateSizesOptions<Suffix extends string>
  extends CreatorOptions<Suffix> {
  unit: CSSLengthUnit;
}

export const createSizesDefaultOptions: CreateSizesOptions<string> = {
  ...creatorDefaultOptions,

  unit: 'rem',
};

export const createSizes = <Suffix extends string = ''>(
  options?: Partial<CreateSizesOptions<Suffix>>,
) => {
  return {
    ...createIconSizes(options),
  };
};
