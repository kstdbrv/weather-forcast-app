  
/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */

module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb-typescript'
  ],
  rules: {
    'array-element-newline': 0,
    'no-console': 1,
    'eslint linebreak-style': ["error", "windows"],
    'linebreak-style': 0,
  },
  parserOptions: {
      project: './tsconfig.json',
   }
};