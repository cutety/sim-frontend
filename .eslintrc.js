module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'indent': ["error", 2],
    'no-tabs': 0,
    'semi':["error", "always"],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
