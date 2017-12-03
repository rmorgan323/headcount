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
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "newline-after-var": [
        "error",
        "always"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
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