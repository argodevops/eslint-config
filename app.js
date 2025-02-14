// eslint.config.js (ES module)
import reactPlugin from 'eslint-plugin-react';

import { FlatCompat } from '@eslint/eslintrc';
const compat = new FlatCompat();

export default [
  // Convert old "extends: 'airbnb'" to a flat config
  ...compat.extends('airbnb'),
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:react-hooks/recommended'),
  ...compat.extends('./base'),

  // Custom overrides
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2021,
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: {
      react: reactPlugin
    },
    rules: {
      'react/jsx-indent': ['error', 4],
      'react/jsx-indent-props': ['error', 4],
      'react/jsx-curly-newline': 'off',
      'react/display-name': 'off',
      'react/require-default-props': 'off',
      'jsx-closing-bracket-location': 'off',
      'jsx-quotes': ['error', 'prefer-single'],
      'react/jsx-closing-bracket-location': 'off',
      'react/function-component-definition': 'off'
    }
  }
];
