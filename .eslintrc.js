module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended' // Includes recommended TypeScript linting rules
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'], // Enables the TypeScript plugin
  rules: {
    '@typescript-eslint/no-explicit-any': 'error' // Disallows the use of the 'any' type
  }
};
