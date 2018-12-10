const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');
const postcssImport = require('postcss-import');

module.exports = {
    plugins: [
        postcssImport,
        postcssNested,
        postcssPresetEnv({
            stage: 0,
            features: {
                'custom-properties': false,
            },
        }),
    ],
};
