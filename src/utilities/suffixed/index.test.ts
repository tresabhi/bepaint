import { suffixed } from '.';

test(`${suffixed.name} doesn't suffix undefined`, () => {
  expect(suffixed()).toBe('');
});

test(`${suffixed.name} suffixes correctly`, () => {
  expect(suffixed('test')).toBe('_test');
});
