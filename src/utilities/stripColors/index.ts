import { ColorObject, Colors, NamelessColorObject, NamelessColors } from 'types/colors';
import getNameFromKey from '../getNameFromKey';

export const colorIndexRegex = /[0-9]+/;

export default function stripColors<Name extends string>(
  colors: ColorObject<Name>,
) {
  const keys = Object.keys(colors) as Colors<Name>[];
  const name = getNameFromKey(keys[0]) as Name;
  const strippedColors: Partial<NamelessColorObject> = {};

  keys.forEach((key) => {
    const value = colors[key];
    const colorIndex = key.match(colorIndexRegex)?.[0] as NamelessColors;

    strippedColors[colorIndex] = value;
  });

  return strippedColors as NamelessColorObject;
}
