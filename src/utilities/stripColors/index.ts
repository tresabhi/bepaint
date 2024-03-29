import {
  ColorNames,
  ColorsPallet,
  NamelessColorNames,
  NamelessColors,
} from 'types/colors';

export const colorIndexRegex = /[0-9]+/;

export default function stripColors<Name extends string>(
  colors: ColorsPallet<Name>,
) {
  const keys = Object.keys(colors) as ColorNames<Name>[];
  const strippedColors: Partial<NamelessColors> = {};

  keys.forEach((key) => {
    const value = colors[key];
    const matches = key.match(colorIndexRegex);

    if (matches === null) throw new Error(`${key} is not a valid color index`);

    const colorIndex = matches?.[0] as NamelessColorNames;

    strippedColors[colorIndex] = value;
  });

  return strippedColors as NamelessColors;
}
