import { Colors } from 'types/colors';

export const colorNameRegex = /[a-zA-Z]+/;

export default function getNameFromKey<
  Name extends string,
  Key extends Colors<Name>,
>(key: Key): Name {
  return (key.match(colorNameRegex)?.[0] ?? '') as Name;
}
