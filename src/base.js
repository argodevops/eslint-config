import babelParser from '@babel/eslint-parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

import merge from 'lodash.merge';

import babelOptions from './babelOptions';

export default merge({}, prettierConfig, eslintPluginPrettierRecommended, {
    languageOptions: {
        globals: {
            Atomics: 'readonly',
            SharedArrayBuffer: 'readonly',
            ...globals.es2021,
            ...globals.jest
        },
        parser: babelParser,
        parserOptions: {
            requireConfigFile: false,
            babelOptions
        },
        ecmaVersion: 2021
    },
    plugins: {
        import: importPlugin
    },
    rules: {
        'padding-line-between-statements': 'error',
        'import/order': [
            'error',
            {
                'groups': [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling'
                ],
                'pathGroups': [
                    {
                        pattern: '{react,react-dom,react-dom/**}',
                        group: 'external',
                        position: 'before'
                    },
                    {
                        pattern: 'prop-types',
                        group: 'external',
                        position: 'before'
                    },
                    {
                        pattern:
                            '{**/components/**, app/components/**, app/components}',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern:
                            '{**/features/**, app/features/**, app/features}',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: '{**/hooks/**, app/hooks/**, app/hooks}',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern:
                            '{**/utilities/**, app/utilities/**, app/utilities}',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: '{app,app/**,config,config/**,utils,utils/**}',
                        group: 'internal',
                        position: 'after'
                    }
                ],
                'pathGroupsExcludedImportTypes': [''],
                'newlines-between': 'always-and-inside-groups',
                'alphabetize': { order: 'asc', caseInsensitive: true }
            }
        ],
        'prettier/prettier': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true
            }
        ],
        'indent': ['warn', 4],
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'id-length': ['error', { min: 3, exceptions: ['id'] }],
        'id-blacklist': [
            'error',
            'err',
            'callback',
            'result',
            'res',
            'req',
            'list'
        ]
    }
});
