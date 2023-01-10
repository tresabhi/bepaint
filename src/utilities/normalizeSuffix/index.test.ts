import normalizeSuffix from '.';

test(`${normalizeSuffix.name} normalizes suffix`, () => {
  expect(normalizeSuffix(undefined)).toBe('');

  expect(normalizeSuffix('test')).toBe('_test');

  expect(normalizeSuffix('')).toBe('_');
});
