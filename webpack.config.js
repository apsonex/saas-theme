const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('js'),
            '@scss': path.resolve('scss'),
            '@common': path.resolve('js/Theme/Common'),
            '@themeBasicUi': path.resolve('js/Theme/BasicUi'),
            '@themeLib': path.resolve('js/Theme/Lib'),
        },
    },
};
