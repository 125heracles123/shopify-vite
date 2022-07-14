const path = require('path')

module.exports = {
  root: true,
  extends: ['standard-with-typescript'],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: [
    'dist'
  ]
}
