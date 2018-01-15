module.exports = {
    "env": {
        "browser": true,
        "jest": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "arrowFunctions": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
        "indent": [
            "warn",
            2
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "newline-after-var": [
        "warn",
        "always"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "warn",
    }
};



// module.exports = {
//     "env": {
//         "browser": true,
//         "es6": true
//     },
//     "extends": "eslint:recommended",
//     "parserOptions": {
//         "ecmaFeatures": {
//             "experimentalObjectRestSpread": true,
//             "jsx": true
//         },
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react"
//     ],
//     "rules": {
//         "indent": [
//             "error",
//             4
//         ],
//         "linebreak-style": [
//             "error",
//             "unix"
//         ],
//         "quotes": [
//             "error",
//             "single"
//         ],
//         "semi": [
//             "error",
//             "always"
//         ]
//     }
// };