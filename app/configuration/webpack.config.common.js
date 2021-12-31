const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path')

module.exports = {
    entry: path.join(__dirname, '../srcs/index.tsx'),
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].bundle.js',
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'ts-loader',
                    options: {
                      configFile: path.join(__dirname, './tsconfig.json')
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new TsconfigPathsPlugin({ configFile: path.join(__dirname, './tsconfig.json') })
    ]
};
