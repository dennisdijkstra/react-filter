module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import",
        "html"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "react/jsx-one-expression-per-line": 0,
        "function-paren-newline": 0,
        "no-return-assign": 0,
        "react/jsx-indent-props": [1, 4],
        "no-unused-expressions": 0,
        "indent": [
            "error", 4
        ],
        "react/jsx-indent": [
            "error", 4
        ],
        "max-len": ["warn", 120, {
            "ignoreUrls" : true,
            "ignoreComments" : false,
            "ignoreRegExpLiterals" : true,
            "ignoreStrings" : true,
            "ignoreTemplateLiterals" : true
        }],
        "no-mixed-operators": ["error", {
            "groups": [
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ],
        "allowSamePrecedence": true
        }],
        "prefer-template": "off",
        "no-console": 0,
        "import/extensions": ["error", "always", {
            "js": "never",
            "vue": "never"
        }],
        "no-plusplus": ["error", {
            "allowForLoopAfterthoughts": true
        }],
        "prefer-destructuring": ["error", {
            "object": false,
            "array": false
        }]
    }
};
