module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'prettier' // Disables ESLint rules that conflict with Prettier
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true
            }
        ],
        'react/react-in-jsx-scope': 'off', // Not needed for Next.js
        'import/no-unresolved': 'off',
        'import/order': ['error', { alphabetize: { order: 'asc' } }],
        'jsx-a11y/anchor-is-valid': 'off',
        'react/jsx-props-no-spreading': 'off',
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
        ],
        'no-restricted-syntax': [
            'error',
            {
                message: 'Optional chaining is not allowed, due to issues collecting code coverage',
                selector: 'ChainExpression'
            },
            {
                message: 'If statements must contain a block statement',
                selector: 'IfStatement > :not(BlockStatement).consequent'
            }
        ],
        'padding-line-between-statements': 'error',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-curly-newline': 'off',
        'react/display-name': 'off',
        'react/require-default-props': 'off',
        'jsx-closing-bracket-location': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-closing-bracket-location': 'off',
        'react/function-component-definition': 'off'
    },
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
