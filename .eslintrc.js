module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'implicit-arrow-linebreak': 0,
    'react/function-component-definition': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interaction': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'max-len': 0,
    indent: 0,
    'function-paren-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-no-useless-fragment': 0,
    'no-unused-vars': 0,
    'object-curly-newline': 0,
    'default-param-last': 0,
    'react/jsx-indent': 0,
    'no-return-assign': 0,
    'no-case-declarations': 0,
    'operator-linebreak': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    camelcase: 0,
    'css-semicolonexpected': 0,
  },
  // jsconfig.json 적용
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
