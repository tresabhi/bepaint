import { amberDark } from '@radix-ui/colors';
import { parseScale } from './parseScale';

test(`${parseScale.name} correctly parses scale`, () => {
  const parsed = parseScale(amberDark);

  expect(parsed.prefix).toBe('amber');
  expect(parsed.size).toBe(12);
  expect(parsed.steps).toMatchObject(Object.keys(amberDark));
});
