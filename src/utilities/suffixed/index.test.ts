import { suffixed } from '.';

test(`${suffixed.name} doesn't suffix undefined`, () => {
  expect(suffixed()).toBe('');
});

test(`${suffixed.name} suffixes correctly`, () => {
  expect(suffixed('test')).toBe('_test');
});

test(`${suffixed.name} allows suffixes of length 1`, () => {
  expect(suffixed('a')).toBe('_a');
});
