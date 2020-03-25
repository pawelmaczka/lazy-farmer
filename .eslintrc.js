module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true,
    },
    "extends": [
        "eslint:recommended",
        "airbnb",
        "plugin:react/recommended",
        "prettier",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "plugins": [
        "spellcheck",
        "react",
        "jest",
        "prettier",
    ],
    "rules": {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": 0,
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
      "react/jsx-one-expression-per-line": 0,
  }
};
