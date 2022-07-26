import { ColorScale, CreatorOptions } from '../../types';
import { creatorDefaultOptions } from '../../utilities';
import { createBackgroundColors } from './createBackgroundColors';
import { createBorderColors } from './createBorderColors';
import { createComponentBackgroundColors } from './createComponentBackgroundColors';
import { createTextColors } from './createTextColors';

export * from './createBackgroundColors';
export * from './createBorderColors';
export * from './createComponentBackgroundColors';
export * from './createTextColors';

export interface CreateColorsOptions<Suffix extends string>
  extends CreatorOptions<Suffix> {
  scale: ColorScale;
}

export const createColorsDefaultOptions: CreateColorsOptions<string> = {
  ...creatorDefaultOptions,

  scale: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
  },
};

export const createColors = <Suffix extends string = ''>(
  options?: Partial<CreateColorsOptions<Suffix>>,
) => {
  return {
    ...createBackgroundColors(options),
    ...createComponentBackgroundColors(options),
    ...createBorderColors(options),
    ...createTextColors(options),
  };
};
