// next.config.js
module.exports = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/formulae-base/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/formulae-base' : '',
    images: {
        unoptimized: true,
    },
};
