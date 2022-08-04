import { creatorDefaultOptions, CreatorOptions } from '..';
import { CSSLengthUnit } from '../../utilities';
import { createGapSpaces } from './createGapSpaces';
import { createMarginSpaces } from './createMarginSpaces';
import { createPaddingSpaces } from './createPaddingSpaces';

export * from './createGapSpaces';
export * from './createMarginSpaces';
export * from './createPaddingSpaces';

export type SizeVariant = '' | 'Major' | 'Minor';
export type SpaceVariant = 'Related' | 'Unrelated';

export interface CreateSpacesOptions<Suffix extends string>
  extends CreatorOptions<Suffix> {
  unit: CSSLengthUnit;
  scale: number;
}

export const createSpacesDefaultOptions: CreateSpacesOptions<string> = {
  ...creatorDefaultOptions,

  unit: 'rem',
  scale: 1,
};

export const createSpaces = <Suffix extends string = ''>(
  options?: CreateSpacesOptions<Suffix>,
) => {
  return {
    ...createGapSpaces(options),
    ...createMarginSpaces(options),
    ...createPaddingSpaces(options),
  };
};
