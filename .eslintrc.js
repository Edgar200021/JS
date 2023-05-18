module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['tab'],
    'linebreak-style': ['error', 'windows'],
    quotes: ['single'],
    semi: ['never'],
    'no-unused-vars': ['warn'],
  },
}
