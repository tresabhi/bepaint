import { Numbered, Scale } from '../types';

export const prefixRegex = /^[a-zA-Z]+/;

export const parseScale = <Prefix extends string, NamedScale = Scale<Prefix>>(
  scale: NamedScale,
) => {
  const steps = Object.keys(scale) as Numbered<Prefix>[];
  const prefix = (steps[0]?.match(prefixRegex)?.[0] ?? '') as Prefix;
  const size = steps.length;

  return { steps, prefix, size };
};
