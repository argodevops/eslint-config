import babelParser from '@babel/eslint-parser';
import airbnb from 'eslint-config-airbnb';
import react from 'eslint-plugin-react';

import eslintPluginReactRecommended from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginReactHooksRecommended from 'eslint-plugin-react-hooks';
import globals from 'globals';

import merge from 'lodash.merge';

import babelOptions from './babelOptions';
import base from './base';

export default merge(
    {},
    airbnb,
    eslintPluginReactRecommended,
    eslintPluginReactHooksRecommended,
    base,
    {
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: 2021,
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                ecmaFeatures: {
                    jsx: true
                },
                babelOptions
            }
        },
        plugins: { react },
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
);
