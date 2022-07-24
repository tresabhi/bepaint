import { isArray } from 'lodash';

export const GOOGLE_FONTS_URL = 'https://fonts.googleapis.com';

export interface CreateGoogleFontsOptions {
  swap: boolean;
}

const createGoogleFontsDefaultOptions: CreateGoogleFontsOptions = {
  swap: true,
};

export const createGoogleFonts = (
  families: string | string[],
  options?: Partial<CreateGoogleFontsOptions>,
) => {
  const mergedOptions = {
    ...createGoogleFontsDefaultOptions,
    ...options,
  };

  return (isArray(families) ? families : [families]).map((family) => {
    const params = new URLSearchParams([
      ['family', family],
      ...(mergedOptions.swap ? [['display', 'swap']] : []),
    ]).toString();

    return `${GOOGLE_FONTS_URL}/css?${params}`;
  });
};
