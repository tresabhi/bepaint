import { Numbered } from './numbered';

export type ColorScale<Name extends string = string> = {
  [key in Numbered<Name>]: string;
};
