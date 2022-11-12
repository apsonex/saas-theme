const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('js'),
            '@scss': path.resolve('scss'),
            '@common': path.resolve('js/Theme/Common'),
        },
    },
};
