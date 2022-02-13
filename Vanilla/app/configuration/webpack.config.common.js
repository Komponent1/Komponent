const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '../srcs/index.ts'),
    resolve: {
        extensions: [".ts", ".js"],
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
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'markdown-loader',
                        options: {
                            langPrefix: "hljs language-",
                            highlight: function(code, lang) {
                                const hljs = require('highlight.js');
                                const result =  hljs.highlight(code, { language: lang }).value;
                                return result;
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};
