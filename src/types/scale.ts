import { Numbered } from './numbered';

export type Scale<Name extends string = string> = {
  [key in Numbered<Name>]: string;
};
