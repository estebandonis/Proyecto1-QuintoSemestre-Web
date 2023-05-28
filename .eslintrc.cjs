module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'airbnb', 'plugin:jest/recommended', 'plugin:storybook/recommended'],
  overrides: [
    {
      "files": ["*.test.jsx"],
      "env": {
        "jest": true
      },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'never'],
    'import/no-unresolved': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': ['error', 'always'],
    'operator-linebreak': 'off',
  },
}
