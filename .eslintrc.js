module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  rules: {
    'no-proto': 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
  plugins: ['jest'],
  overrides: [
    {
      files: ['src/client/**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
};
