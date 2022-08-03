export * from './createColors';
export * from './createFonts';
export * from './createFontSizes';
export * from './createFontWeights';
export * from './createSizes';
export * from './createSpaces';

export interface CreatorOptions<Suffix extends string> {
  suffix: Suffix;
}

export const creatorDefaultOptions: CreatorOptions<string> = {
  suffix: '',
};
