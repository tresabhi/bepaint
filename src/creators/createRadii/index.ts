import { merge } from 'lodash';
import { creatorDefaultOptions, CreatorOptions } from '..';
import { Suffixed } from '../../types';
import { CSSLengthUnit, suffixed, toUnit } from '../../utilities';

export type RadiiToken = 'default' | 'sharp' | 'subtle' | 'blunt' | 'full';

export type Radii<Suffix extends string> = Record<
  Suffixed<Suffix, RadiiToken>,
  string
>;

export interface CreateRadiiOptions<Suffix extends string>
  extends CreatorOptions<Suffix> {
  unit: CSSLengthUnit;
}

export const createRadiiDefaultOptions: CreateRadiiOptions<string> = {
  ...creatorDefaultOptions,

  unit: 'rem',
};

export const createRadii = <Suffix extends string = ''>(
  options?: Partial<CreateRadiiOptions<Suffix>>,
) => {
  const m = merge(createRadiiDefaultOptions, options);
  const s = suffixed(m.suffix);
  const to = (value: number) => toUnit(value, m.unit);

  return {
    [`default${s}`]: to(4),
    [`sharp${s}`]: to(2),
    [`subtle${s}`]: to(1),
    [`blunt${s}`]: to(8),
    [`full${s}`]: '50%',
  } as Radii<Suffix>;
};
