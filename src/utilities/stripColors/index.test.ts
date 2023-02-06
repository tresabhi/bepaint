import stripColors from '.';

test(`${stripColors.name} strips color name`, () => {
  expect(
    stripColors({
      testTest1: 'a',
      testTest2: 'b',
    }),
  ).toEqual({
    1: 'a',
    2: 'b',
  });
});
