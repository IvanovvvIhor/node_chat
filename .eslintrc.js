module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  rules: {
    'no-proto': 0,
  },
  plugins: ['jest', '@typescript-eslint', 'react'],
  overrides: [
    {
      files: ['src/client/**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react/react-in-jsx-scope': 'off', 
      }
    }
  ],
  ignorePatterns: ["node_modules/", "dist/"],
};
