const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config.common');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    devServer: {
        historyApiFallback: true,
        host: "0.0.0.0",
        port: 3000,
        //proxy: '',
    },
    watchOptions: {
        poll: true
    }
});
