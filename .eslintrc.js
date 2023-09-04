module.exports = {
  "env": {
    "node": true,
    "jest": true
  },
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false
  },
  "plugins": [
    "prettier",
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/no-use-before-define": [
      "off"
    ],
    "quotes": [
      2,
      "single",
      "avoid-escape"
    ],
    "import/prefer-default-export": [
      "off"
    ],
    "import/extensions": [
      "off"
    ],
    "spaced-comment": [
      "off",
      "always"
    ],
    "no-extra-boolean-cast": [
      "off"
    ],
    "no-nested-ternary": [
      "off"
    ],
    "no-use-before-define": [
      "off"
    ],
    "no-shadow": [
      "off"
    ],
    "@typescript-eslint/no-shadow": [
      "error"
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "off"
    ],
    "@typescript-eslint/interface-name-prefix": [
      "off"
    ],
    "@typescript-eslint/ban-ts-ignore": [
      "off"
    ],
    "@typescript-eslint/ban-ts-comment": [
      "off"
    ],
    "@typescript-eslint/ban-types": [
      "off"
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "off"
    ],
    "@typescript-eslint/no-unused-vars": [
      "error"
    ],
    "no-console": [
      "off"
    ],
    "no-implicit-coercion": [
      "error"
    ],
    "no-process-env": [
      "off"
    ],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-underscore-dangle": [
      "off"
    ],
    "no-unused-expressions": [
      "error"
    ],
    "prefer-promise-reject-errors": [
      "error"
    ],
    "no-unused-vars": [
      "off",
      {
        "args": "none"
      }
    ],
    "valid-jsdoc": [
      "off",
      {
        "requireParamDescription": false,
        "requireReturnDescription": false,
        "requireReturn": false,
        "prefer": {
          "returns": "return"
        },
        "requireReturnType": true,
        "requireParamType": true
      }
    ],
    "new-cap": [
      "off"
    ],
    "require-jsdoc": [
      "off",
      {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true,
          "ArrowFunctionExpression": false,
          "FunctionExpression": false
        }
      }
    ],
    "prettier/prettier": [
      "error"
    ],
    "arrow-body-style": [
      "off"
    ],
    "prefer-arrow-callback": [
      "off"
    ],
    "curly": [
      0,
      "multi-line"
    ],
    "lines-around-comment": [
      0
    ],
    "max-len": [
      0,
      {
        "code": 80,
        "tabWidth": 2,
        "ignoreUrls": true,
        "ignorePattern": "goog.(module|require)"
      }
    ],
    "no-confusing-arrow": [
      0
    ],
    "no-mixed-operators": [
      0
    ],
    "no-tabs": [
      0
    ],
    "no-unexpected-multiline": [
      0
    ],
    "array-bracket-newline": [
      "off"
    ],
    "array-bracket-spacing": [
      "off",
      "never"
    ],
    "array-element-newline": [
      "off"
    ],
    "arrow-parens": [
      "off",
      "always"
    ],
    "arrow-spacing": [
      "off"
    ],
    "block-spacing": [
      "off",
      "never"
    ],
    "brace-style": [
      "off"
    ],
    "comma-dangle": [
      "off",
      "always-multiline"
    ],
    "comma-spacing": [
      "off"
    ],
    "comma-style": [
      "off"
    ],
    "computed-property-spacing": [
      "off"
    ],
    "dot-location": [
      "off"
    ],
    "eol-last": [
      "off"
    ],
    "func-call-spacing": [
      "off"
    ],
    "function-call-argument-newline": [
      "off"
    ],
    "function-paren-newline": [
      "off"
    ],
    "generator-star": [
      "off"
    ],
    "generator-star-spacing": [
      "off",
      "after"
    ],
    "implicit-arrow-linebreak": [
      "off"
    ],
    "indent": [
      "off",
      2,
      {
        "CallExpression": {
          "arguments": 2
        },
        "FunctionDeclaration": {
          "body": 1,
          "parameters": 2
        },
        "FunctionExpression": {
          "body": 1,
          "parameters": 2
        },
        "MemberExpression": 2,
        "ObjectExpression": 1,
        "SwitchCase": 1,
        "ignoredNodes": [
          "ConditionalExpression"
        ],
        "flatTernaryExpressions": false,
        "offsetTernaryExpressions": false,
        "ignoreComments": false
      }
    ],
    "jsx-quotes": [
      "off"
    ],
    "key-spacing": [
      "off"
    ],
    "keyword-spacing": [
      "off"
    ],
    "linebreak-style": [
      "off"
    ],
    "multiline-ternary": [
      "off"
    ],
    "newline-per-chained-call": [
      "off"
    ],
    "new-parens": [
      "off"
    ],
    "no-arrow-condition": [
      "off"
    ],
    "no-comma-dangle": [
      "off"
    ],
    "no-extra-parens": [
      "off"
    ],
    "no-extra-semi": [
      "off"
    ],
    "no-floating-decimal": [
      "off"
    ],
    "no-mixed-spaces-and-tabs": [
      "off"
    ],
    "no-multi-spaces": [
      "off"
    ],
    "no-multiple-empty-lines": [
      "off",
      {
        "max": 2
      }
    ],
    "no-reserved-keys": [
      "off"
    ],
    "no-space-before-semi": [
      "off"
    ],
    "no-trailing-spaces": [
      "off"
    ],
    "no-whitespace-before-property": [
      "off"
    ],
    "no-wrap-func": [
      "off"
    ],
    "nonblock-statement-body-position": [
      "off"
    ],
    "object-curly-newline": [
      "off"
    ],
    "object-curly-spacing": [
      "off"
    ],
    "object-property-newline": [
      "off"
    ],
    "one-var-declaration-per-line": [
      "off"
    ],
    "operator-linebreak": [
      "off",
      "after"
    ],
    "padded-blocks": [
      "off",
      "never"
    ],
    "quote-props": [
      "off",
      "consistent"
    ],
    "rest-spread-spacing": [
      "off"
    ],
    "semi": [
      "off"
    ],
    "semi-spacing": [
      "off"
    ],
    "semi-style": [
      "off"
    ],
    "space-after-function-name": [
      "off"
    ],
    "space-after-keywords": [
      "off"
    ],
    "space-before-blocks": [
      "off"
    ],
    "space-before-function-paren": [
      "off",
      {
        "asyncArrow": "always",
        "anonymous": "never",
        "named": "never"
      }
    ],
    "space-before-function-parentheses": [
      "off"
    ],
    "space-before-keywords": [
      "off"
    ],
    "space-in-brackets": [
      "off"
    ],
    "space-in-parens": [
      "off"
    ],
    "space-infix-ops": [
      "off"
    ],
    "space-return-throw-case": [
      "off"
    ],
    "space-unary-ops": [
      "off"
    ],
    "space-unary-word-ops": [
      "off"
    ],
    "switch-colon-spacing": [
      "off"
    ],
    "template-curly-spacing": [
      "off"
    ],
    "template-tag-spacing": [
      "off"
    ],
    "unicode-bom": [
      "off"
    ],
    "wrap-iife": [
      "off"
    ],
    "wrap-regex": [
      "off"
    ],
    "yield-star-spacing": [
      "off",
      "after"
    ],
    "indent-legacy": [
      "off"
    ],
    "no-spaced-func": [
      "off"
    ],
    "@typescript-eslint/adjacent-overload-signatures": [
      "error"
    ],
    "no-array-constructor": [
      "off"
    ],
    "@typescript-eslint/no-array-constructor": [
      "error"
    ],
    "no-empty-function": [
      "off"
    ],
    "@typescript-eslint/no-empty-function": [
      "error"
    ],
    "@typescript-eslint/no-empty-interface": [
      "error"
    ],
    "@typescript-eslint/no-explicit-any": [
      "warn"
    ],
    "@typescript-eslint/no-extra-non-null-assertion": [
      "error"
    ],
    "@typescript-eslint/no-extra-semi": [
      "error"
    ],
    "@typescript-eslint/no-inferrable-types": [
      "error"
    ],
    "no-loss-of-precision": [
      "off"
    ],
    "@typescript-eslint/no-loss-of-precision": [
      "error"
    ],
    "@typescript-eslint/no-misused-new": [
      "error"
    ],
    "@typescript-eslint/no-namespace": [
      "error"
    ],
    "@typescript-eslint/no-non-null-asserted-optional-chain": [
      "error"
    ],
    "@typescript-eslint/no-non-null-assertion": [
      "warn"
    ],
    "@typescript-eslint/no-this-alias": [
      "error"
    ],
    "@typescript-eslint/no-unnecessary-type-constraint": [
      "error"
    ],
    "@typescript-eslint/no-var-requires": [
      "error"
    ],
    "@typescript-eslint/prefer-as-const": [
      "error"
    ],
    "@typescript-eslint/prefer-namespace-keyword": [
      "error"
    ],
    "@typescript-eslint/triple-slash-reference": [
      "error"
    ],
    "no-cond-assign": [
      0
    ],
    "no-irregular-whitespace": [
      2
    ],
    "guard-for-in": [
      2
    ],
    "no-caller": [
      2
    ],
    "no-extend-native": [
      2
    ],
    "no-extra-bind": [
      2
    ],
    "no-invalid-this": [
      2
    ],
    "no-multi-str": [
      2
    ],
    "no-new-wrappers": [
      2
    ],
    "no-throw-literal": [
      2
    ],
    "no-with": [
      2
    ],
    "camelcase": [
      2,
      {
        "properties": "never",
        "ignoreDestructuring": false,
        "ignoreImports": false,
        "ignoreGlobals": false
      }
    ],
    "no-new-object": [
      2
    ],
    "one-var": [
      2,
      {
        "var": "never",
        "let": "never",
        "const": "never"
      }
    ],
    "constructor-super": [
      2
    ],
    "no-new-symbol": [
      2
    ],
    "no-this-before-super": [
      2
    ],
    "no-var": [
      2
    ],
    "prefer-const": [
      2,
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }
    ],
    "prefer-rest-params": [
      2
    ],
    "prefer-spread": [
      2
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  "ignorePatterns": [
    ".eslintrc.js"
  ]
};