module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'new-cap': 1,
    'require-jsdoc': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
  },
};
