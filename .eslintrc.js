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
  plugins: ['@typescript-eslint', 'html'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'no-console': 'warn'
  },
  ignorePatterns: ['/dist', '/.angular', '/src/app/api', '/.history', '/documentation', '/coverage']
};
