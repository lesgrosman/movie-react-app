// https://robertcooper.me/post/using-eslint-and-prettier-in-a-typescript-project
module.exports = {
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    semi: 'off',
    eqeqeq: 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    'prefer-arrow-callback': 1,
    'no-use-before-define': 0,
    'max-len': [
      'off',
      {
        code: 100,
        ignoreComments: true,
        ignorePattern: '^import .*',
      },
    ],
    'new-parens': 'error',
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-console': ['warn', { allow: ['warn', 'info', 'error'] }],
    'no-caller': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
    'quote-props': ['error', 'as-needed'],
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'no-irregular-whitespace': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-constant-binary-expression': 'error',
    'react/prop-types': 'off', // DELETE when typescript
  },
  plugins: ['sort-imports-es6-autofix'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
