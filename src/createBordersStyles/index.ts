import { BorderColorNames } from 'createColors';
import { ColorsPallet } from 'types/colors';
import { SuffixInput } from 'types/suffix';
import normalizeSuffix from 'utilities/normalizeSuffix';
import stripColors from 'utilities/stripColors';
import toREM from 'utilities/toREM';

export type BorderStyleNames<Suffix extends SuffixInput> =
  BorderColorNames<Suffix>;

export type BorderStyles<Suffix extends SuffixInput> = Record<
  BorderColorNames<Suffix>,
  string
>;

export function createBordersStyles<Suffix extends SuffixInput>(
  colors: ColorsPallet<string>,
  suffix?: Suffix,
  borderStyles = `solid ${toREM(1)}`,
) {
  // TODO: move borderStyles before suffix
  const s = normalizeSuffix(suffix);
  const c = stripColors(colors);

  return {
    [`borderNonInteractive${s}`]: `${c[6]} ${borderStyles}`,
    [`borderInteractive${s}`]: `${c[7]} ${borderStyles}`,
    [`borderInteractiveHovered${s}`]: `${c[8]} ${borderStyles}`,
    [`borderInteractivePressed${s}`]: `${c[9]} ${borderStyles}`,
    [`borderInteractiveSelected${s}`]: `${c[9]} ${borderStyles}`,
  } as BorderStyles<Suffix>;
}
