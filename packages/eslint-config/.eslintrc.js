module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      // parser: 'babel-eslint',
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'prettier',
        'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
        '@typescript-eslint/no-explicit-any': 'off',
        'func-names': 'off',
        'react/style-prop-object': 'off',
        'class-methods-use-this': 'off',
        'no-useless-constructor': 'off',
        'no-unused-expressions': 'off',
        camelcase: 'off',
        'react/require-default-props': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'react/jsx-filename-extension': [
          2,
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'no-use-before-define': 'off',
        'react/jsx-props-no-spreading': 'off',
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',

        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',

        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': 'off',

        'jsx-a11y/aria-role': 'off',

        // I suggest this setting for requiring return types on functions only where useful
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],

        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules

        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
      },
    },
  ],
};
