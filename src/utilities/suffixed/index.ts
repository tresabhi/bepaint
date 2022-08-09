import { Suffixed } from '../../types';

export const suffixed = <Suffix extends string>(suffix?: Suffix) => {
  return (suffix && suffix.length > 0 ? `_${suffix}` : '') as Suffixed<Suffix>;
};
