module.exports = {
    rules: {
        'max-len': 'warn',
        'id-length': ['error', {
            exceptions: [
                //TODO: quitar lodash y forzar destructuring?
                '_',//lodash
                //TODO: quitar R y forzar destructuring?
                'R',//ramda
                't',//translation helper
                //TODO: preferimos map/foreach ?
                'i',//for loops
            ],
        }],
    },
};
