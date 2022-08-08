module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },

  overrides: [
    {
      files: ['src/**/*.ts'],
    },
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-unsafe-member-access': ['off'],
  },
};
