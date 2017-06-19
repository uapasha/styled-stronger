module.exports = {
  env: {
    jest: true,
    jasmine: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
  }
};
