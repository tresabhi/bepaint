import { ColorsPallet } from 'types/colors';
import { ComponentPriorities } from 'types/componentPriorities';
import { ComponentStates } from 'types/componentStates';
import { SuffixInput } from 'types/suffix';
import normalizeSuffix, { NormalizeSuffix } from 'utilities/normalizeSuffix';
import stripColors from 'utilities/stripColors';

export type ComponentColorNames<Suffix extends SuffixInput> =
  `component${ComponentPriorities}${
    | `Interactive${ComponentStates}`
    | 'NonInteractive'}${NormalizeSuffix<Suffix>}`;

export type ComponentColors<Suffix extends SuffixInput> = Record<
  ComponentColorNames<Suffix>,
  string
>;

export function createComponentColors<Suffix extends SuffixInput>(
  colors: ColorsPallet<string>,
  suffix?: Suffix,
) {
  const s = normalizeSuffix(suffix);
  const c = stripColors(colors);

  return {
    [`componentInteractive${s}`]: c[3],
    [`componentInteractiveHovered${s}`]: c[4],
    [`componentInteractiveActive${s}`]: c[5],
    [`componentInteractiveFocused${s}`]: c[5],
    [`componentCallToActionInteractive${s}`]: c[4],
    [`componentCallToActionInteractiveHovered${s}`]: c[5],
    [`componentCallToActionInteractiveActive${s}`]: c[6],
    [`componentCallToActionInteractiveFocused${s}`]: c[6],
    [`componentSolidInteractive${s}`]: c[9],
    [`componentSolidInteractiveHovered${s}`]: c[10],
    [`componentSolidInteractiveActive${s}`]: c[11],
    [`componentSolidInteractiveFocused${s}`]: c[11],
    [`componentNonInteractive${s}`]: c[2],
    [`componentCallToActionNonInteractive${s}`]: c[3],
    [`componentSolidNonInteractive${s}`]: c[8],
  } as ComponentColors<Suffix>;
}
