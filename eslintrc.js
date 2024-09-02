// .eslintrc.js
module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/typescript',
      'plugin:sonarjs/recommended',
      'plugin:tailwindcss/recommended',
      'prettier',
      'config:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      // Add any custom rules here
    },
  };
  