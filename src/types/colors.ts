export type ColorNames<Name extends string> =
  | `${Name}1`
  | `${Name}2`
  | `${Name}3`
  | `${Name}4`
  | `${Name}5`
  | `${Name}6`
  | `${Name}7`
  | `${Name}8`
  | `${Name}9`
  | `${Name}10`
  | `${Name}11`
  | `${Name}12`;

export type Colors<Name extends string> = Record<ColorNames<Name>, string>;

export type NamelessColorNames = ColorNames<''>;

export type NamelessColors = Record<NamelessColorNames, string>;
