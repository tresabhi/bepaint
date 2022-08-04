import { merge } from 'lodash';
import { creatorDefaultOptions, CreatorOptions } from '..';
import { Suffixed } from '../../types';
import { suffixed } from '../../utilities';

export type LineHeightToken = 'single' | 'compact' | 'comfortable' | 'double';

export type LineHeights<Suffix extends string> = Record<
  Suffixed<Suffix, LineHeightToken>,
  number
>;

/**
 * Based on the presets available in
 * [Google Docs](https://docs.google.com/document/)
 */
export const createLineHeights = <Suffix extends string = ''>(
  options?: Partial<CreatorOptions<Suffix>>,
) => {
  const m = merge(creatorDefaultOptions, options);
  const s = suffixed(m.suffix);

  return {
    [`single${s}`]: 1,
    [`compact${s}`]: 1.15,
    [`comfortable${s}`]: 1.5,
    [`double${s}`]: 2,
  } as LineHeights<Suffix>;
};
