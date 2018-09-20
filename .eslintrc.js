module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'no-undef': 0,
    'no-console': 0,
    'react/prop-types': 0
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      propWrapperFunctions: ['forbidExtraProps']
    }
  }
};
