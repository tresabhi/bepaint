import merge from 'lodash.merge';
import { createFontsDefaultOptions, CreateFontsOptions } from '.';

export const GOOGLE_FONTS_URL = 'https://fonts.googleapis.com';

interface FontWeightMinMax {
  min: number;
  max: number;
}

export interface CreateGoogleFontsOptions extends CreateFontsOptions {
  display: 'block' | 'swap' | 'fallback' | 'optional';
  weight: number | FontWeightMinMax;
}

const createGoogleFontsDefaultOptions: CreateGoogleFontsOptions = {
  ...createFontsDefaultOptions,

  display: 'swap',
  weight: 400,
};

/**
 * Creates Google Fonts stylesheet URLs using the
 * [Google Fonts CSS2 API](https://developers.google.com/fonts/docs/css2)
 */
export const createGoogleFonts = (
  options?: Partial<CreateGoogleFontsOptions>,
) => {
  const m = merge(createGoogleFontsDefaultOptions, options);

  const weights =
    typeof m.weight === 'number'
      ? m.weight
      : `${m.weight.min}..${m.weight.max}`;
  const families = (typeof m.family === 'string' ? [m.family] : m.family).map(
    (family) => {
      return ['family', `${family}:wght@${weights}`];
    },
  );
  const parameters = new URLSearchParams([
    ...families,
    ['display', m.display],
  ] as [string, string][]).toString();

  return `${GOOGLE_FONTS_URL}/css2?${parameters}`;
};
