import { ColorScale, Numbered } from '../../types';

export const prefixRegex = /^[a-zA-Z]+/;

export const parseScale = <
  Prefix extends string,
  NamedScale = ColorScale<Prefix>,
>(
  scale: NamedScale,
) => {
  const steps = Object.keys(scale as object) as Array<Numbered<Prefix>>;
  const prefix = (steps[0]?.match(prefixRegex)?.[0] ?? '') as Prefix;
  const size = steps.length;

  return { steps, prefix, size, p: prefix };
};
