module.exports = {
    env: {
        es2020: true,
        jest: true
    },
    extends: ['plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: {
        'no-restricted-syntax': [
            'error',
            {
                message:
                    'Optional chaining is not allowed, due to issues collecting code coverage',
                selector: 'ChainExpression'
            },
            {
                message: 'If statements must contain a block statement',
                selector: 'IfStatement > :not(BlockStatement).consequent'
            }
        ],
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
        'id-denylist': [
            'error',
            'err',
            'callback',
            'result',
            'res',
            'req',
            'list'
        ]
    }
};
