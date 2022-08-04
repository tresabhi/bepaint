import { merge } from 'lodash';
import { creatorDefaultOptions, CreatorOptions } from '..';
import { Suffixed } from '../../types';
import { CSSLengthUnit, suffixed, toUnit } from '../../utilities';

export type BorderWidthToken = 'default' | 'subtle' | 'strong';

export type BorderWidths<Suffix extends string> = Record<
  Suffixed<Suffix, BorderWidthToken>,
  string
>;

export interface CreateBorderWidthsOptions<Suffix extends string>
  extends CreatorOptions<Suffix> {
  unit: CSSLengthUnit;
}

export const createBorderWidthsDefaultOptions: CreateBorderWidthsOptions<string> =
  {
    ...creatorDefaultOptions,

    unit: 'rem',
  };

export const createBorderWidths = <Suffix extends string = ''>(
  options?: Partial<CreateBorderWidthsOptions<Suffix>>,
) => {
  const m = merge(createBorderWidthsDefaultOptions, options);
  const s = suffixed(m.suffix);
  const to = (value: number) => toUnit(value, m.unit);

  return {
    [`default${s}`]: to(1),
    [`subtle${s}`]: to(0.5),
    [`strong${s}`]: to(2),
  } as BorderWidths<Suffix>;
};
