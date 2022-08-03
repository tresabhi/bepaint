import { merge } from 'lodash';
import { createSizesDefaultOptions, CreateSizesOptions } from '.';
import { Suffixed } from '../../types';
import { suffixed, toUnit } from '../../utilities';
import { SizeVariant } from '../createSpaces';

export type IconSizeToken = `icon${SizeVariant}` | 'iconInText';

export type IconSizes<Suffix extends string> = Record<
  Suffixed<Suffix, IconSizeToken>,
  string
>;

export interface CreateIconSizesOptions<Suffix extends string>
  extends CreateSizesOptions<Suffix> {
  inTextScale: number;
}

export const createIconSizesDefaultOptions: CreateIconSizesOptions<string> = {
  ...createSizesDefaultOptions,

  inTextScale: 0.8,
};

export const createIconSizes = <Suffix extends string = ''>(
  options?: Partial<CreateIconSizesOptions<Suffix>>,
) => {
  const m = merge(createIconSizesDefaultOptions, options);
  const to = (value: number) => toUnit(value, m.unit);
  const s = suffixed(m.suffix);

  return {
    [`icon${s}`]: to(16),
    [`iconMajor${s}`]: to(24),
    [`iconMinor${s}`]: to(12),
    [`iconInText${s}`]: `calc(1em * ${m.inTextScale})`,
  } as IconSizes<Suffix>;
};
