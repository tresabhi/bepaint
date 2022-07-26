import { CreatorOptions, Suffixed } from '../../types';
import { creatorDefaultOptions, mergeOptions, suffixed } from '../../utilities';

export type FontWeightToken =
  | 'title'
  | 'heading'
  | 'paragraph'
  | 'code'
  | 'callToAction';

export type FontWeights<Suffix extends string> = Record<
  Suffixed<Suffix, FontWeightToken>,
  number
>;

export interface CreateFontWeightsOptions<Suffix extends string>
  extends CreatorOptions<Suffix> {
  scale: number;
}

export const createFontWeightsDefaultOptions: CreateFontWeightsOptions<string> =
  {
    ...creatorDefaultOptions,

    scale: 1,
  };

/**
 * If you're using `createGoogleFonts` and your font supports variable weights,
 * make sure you set `weights` to `{ min: 100, max: 1000 }` in the options.
 */
export const createFontWeights = <Suffix extends string = ''>(
  options?: Partial<CreateFontWeightsOptions<Suffix>>,
) => {
  const m = mergeOptions(createFontWeightsDefaultOptions, options);
  const s = suffixed(m.suffix);

  return {
    [`title${s}`]: 800,
    [`heading${s}`]: 700,
    [`paragraph${s}`]: 500,
    [`code${s}`]: 350,
    [`callToAction${s}`]: 700,
  } as FontWeights<Suffix>;
};
