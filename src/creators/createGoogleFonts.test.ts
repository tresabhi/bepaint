import { createGoogleFonts } from './createGoogleFonts';

test(`${createGoogleFonts.name} correctly generates multiple Google fonts URLs`, () => {
  const URLs = createGoogleFonts(['Roboto Flex', 'Inter']);

  expect(URLs[0]).toBe(
    'https://fonts.googleapis.com/css?family=Roboto+Flex&display=swap',
  );
  expect(URLs[1]).toBe(
    'https://fonts.googleapis.com/css?family=Inter&display=swap',
  );
});

test(`${createGoogleFonts.name} correctly generates multiple Google fonts URLs without display=swap`, () => {
  const URLs = createGoogleFonts(['Roboto Flex', 'Inter'], {
    swap: false,
  });

  expect(URLs[0]).toBe('https://fonts.googleapis.com/css?family=Roboto+Flex');
  expect(URLs[1]).toBe('https://fonts.googleapis.com/css?family=Inter');
});

test(`${createGoogleFonts.name} correctly generates one Google fonts URLs`, () => {
  const URLs = createGoogleFonts('Montserrat');

  expect(URLs[0]).toBe(
    'https://fonts.googleapis.com/css?family=Montserrat&display=swap',
  );
});
