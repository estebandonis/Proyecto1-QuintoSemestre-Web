module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'never'],
    'import/no-unresolved': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': ['error', 'always'],
    'operator-linebreak': 'off',
  },
}
