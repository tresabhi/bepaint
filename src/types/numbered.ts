import { Range } from './range';

export type Numbered<Prefix extends string> = `${Prefix}${Range<1, 12>}`;
