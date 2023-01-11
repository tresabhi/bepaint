import { SuffixInput } from 'types/suffix';
import { createGaps, GapNames } from './gap';
import { createMargins, MarginNames } from './margin';
import { createPaddings, PaddingNames } from './padding';

export type SpaceNames<Suffix extends SuffixInput> =
  | GapNames<Suffix>
  | MarginNames<Suffix>
  | PaddingNames<Suffix>;

export type Spaces<Suffix extends SuffixInput> = Record<
  SpaceNames<Suffix>,
  string
>;

export function createSpaces<Suffix extends SuffixInput>(
  scale = 1,
  suffix?: Suffix,
) {
  return {
    ...createGaps(scale, suffix),
    ...createMargins(scale, suffix),
    ...createPaddings(scale, suffix),
  } as Spaces<Suffix>;
}
