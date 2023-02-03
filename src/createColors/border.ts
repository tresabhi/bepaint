import { ColorsPallet } from 'types/colors';
import { ComponentStates } from 'types/componentStates';
import { ComponentUsability } from 'types/componentUsability';
import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import stripColors from 'utilities/stripColors';

export type BorderColorNames<Suffix extends SuffixInput> =
  `border${ComponentUsability<ComponentStates>}${NormalizeSuffix<Suffix>}`;

export type BorderColors<Suffix extends SuffixInput> = Record<
  BorderColorNames<Suffix>,
  string
>;

export function createBorderColors<Suffix extends SuffixInput>(
  colors: ColorsPallet<string>,
  suffix?: Suffix,
) {
  const s = normalizeSuffix(suffix);
  const c = stripColors(colors);

  return {
    [`borderNonInteractive${s}`]: c[6],
    [`borderInteractive${s}`]: c[7],
    [`borderInteractiveHovered${s}`]: c[8],
    [`borderInteractiveActive${s}`]: c[9],
    [`borderInteractiveFocused${s}`]: c[9],
  } as BorderColors<Suffix>;
}
