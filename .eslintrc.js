module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'indent': ["error", 4],
        'eqeqeq': ['off', 'smart'],
        'camelcase': ['off', { properties: 'never' }],
        'linebreak-style': [
            'off'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': 0,
        'no-console': 'off',
        'no-debugger': 'off',
        "no-tabs": "off",
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
