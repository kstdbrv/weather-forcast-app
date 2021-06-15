/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */

module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    /* 'airbnb-typescript' */
  ],
/*   rules: {
    'array-element-newline': 0,
    'no-console': 1,
    'linebreak-style': ['error', 'windows'],
  }, */
  parserOptions: {
      project: './tsconfig.json',
   }
};
