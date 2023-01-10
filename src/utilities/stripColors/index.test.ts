import stripColors from '.';

test(`${stripColors.name} correctly strips color name`, () => {
  expect(
    stripColors({
      testTest1: 'a',
      testTest2: 'b',
      testTest3: 'c',
      testTest4: 'd',
      testTest5: 'e',
      testTest6: 'f',
      testTest7: 'g',
      testTest8: 'h',
      testTest9: 'i',
      testTest10: 'j',
      testTest11: 'k',
      testTest12: 'l',
    }),
  ).toEqual({
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'i',
    10: 'j',
    11: 'k',
    12: 'l',
  });
});
