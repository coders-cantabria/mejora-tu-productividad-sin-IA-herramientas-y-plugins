module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'html', 'unused-imports'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'no-console': 'warn',
    'unused-imports/no-unused-imports': 'error', // Remove unused imports
    'unused-imports/no-unused-vars': [
      'warn', // Warn for unused variables
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  },
  ignorePatterns: ['/dist', '/.angular', '/src/app/api', '/.history', '/documentation', '/coverage']
};
