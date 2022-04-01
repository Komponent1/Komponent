const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '../srcs/index.js'),
    output: {
      path: path.join(__dirname, '../dist'),
      filename: 'index.js',
      libraryTarget: 'commonjs'
    },
    mode: 'production',
    resolve: {
        extensions: [".ts", ".js", ".tsx"],
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
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
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};
