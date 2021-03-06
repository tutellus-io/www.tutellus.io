module.exports = {
    root: true,
    parser: "babel-eslint",
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
        //poner espacios en las variables de los template string ayuda a verlas
        //más fácilmente, haciendo el código más legible.
        'template-curly-spacing': ['error', 'always'],
        'no-unused-expressions': ['error', {allowTaggedTemplates: true}],
        //en una arrow function debe indicarse con paréntesis el body si puede llevar
        //a confusión: ` a => (a ? b : c)`
        'no-confusing-arrow': ['error', {allowParens: true}],
        //solo es un warning, a veces son necesarios para hacer typecast en flowtype
        'no-extra-parens': ['warn', 'all', {
            enforceForArrowConditionals: false,
            nestedBinaryExpressions: false,
        }],
        'arrow-parens': ['warn', 'as-needed'],
        'react/prop-types': 'warn',
        'react/display-name': 'warn',
        'class-methods-use-this': 'warn',
        'max-lines': 'warn',
        'prefer-arrow-callback': ['error', {
            allowUnboundThis: true,
        }],
    },
};
