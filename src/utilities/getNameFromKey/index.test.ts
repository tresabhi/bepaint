import getNameFromKey from '.';

test(`${getNameFromKey.name} gets name from keys`, () => {
  expect(getNameFromKey('mauve6')).toBe('mauve');

  expect(getNameFromKey('testTest12')).toBe('testTest');
});
