const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '../src/index.tsx'),
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.join(__dirname, './.babelrc')
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/public/index.html'),
        })
    ],
    mode: 'development',
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    devServer: {
        historyApiFallback: true,
        host: "0.0.0.0",
        port: 3001,
        //proxy: '',
    },
    watchOptions: {
        poll: true
    }
};
