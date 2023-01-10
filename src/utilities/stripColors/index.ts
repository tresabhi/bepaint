import {
  ColorNames,
  Colors,
  NamelessColorNames,
  NamelessColors,
} from 'types/colors';

export const colorIndexRegex = /[0-9]+/;

export default function stripColors<Name extends string>(colors: Colors<Name>) {
  const keys = Object.keys(colors) as ColorNames<Name>[];
  const strippedColors: Partial<NamelessColors> = {};

  keys.forEach((key) => {
    const value = colors[key];
    const colorIndex = key.match(colorIndexRegex)?.[0] as NamelessColorNames;

    strippedColors[colorIndex] = value;
  });

  return strippedColors as NamelessColors;
}
