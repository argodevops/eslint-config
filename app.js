module.exports = {
    env: {
        browser: true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        './base'
    ],
    plugins: ['react'],
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
};
