module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
    },
    globals: {
        window: true,
        navigator: true,
        document: true,
        localStorage: true,
    },
    extends: ['tutellus', "plugin:react/recommended"],
    plugins: ["react"],
    rules: {
        //respetar los 80 caracteres es contraproducente en html (jsx)
        //es mejor poner cada etiqueta en su propia línea y que ocupe lo que necesite
        'max-len': 'warn',
        //poner espacios en las variables de los template string ayuda a verlas
        //más fácilmente, haciendo el código más legible.
        'template-curly-spacing': ['error', 'always'],
        'no-unused-expressions': ['error', {allowTaggedTemplates: true}],
        //en una arrow function debe indicarse con paréntesis el body si puede llevar
        //a confusión: ` a => (a ? b : c)`
        'no-confusing-arrow': ['error', {allowParens: true}],
        'no-extra-parens': ['error', 'all', {
            enforceForArrowConditionals: false,
            nestedBinaryExpressions: false,
        }],
        'arrow-parens': ['error', 'as-needed'],
        'react/prop-types': 'warn',
        'react/display-name': 'warn',
        'class-methods-use-this': 'warn',
        'prefer-arrow-callback': ['error', {
            allowUnboundThis: true,
        }],
    },
};
