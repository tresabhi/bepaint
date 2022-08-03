export * from './createGoogleFonts';

export interface CreateFontsOptions {
  family: string | string[];
}

export const createFontsDefaultOptions: CreateFontsOptions = {
  family: [],
};
