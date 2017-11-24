'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../build/modules')
    },
    module: {
        rules: [
            /*{
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },*/
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            css: 'style-loader!css-loader!sass-loader'
                        }
                    }
                }
            }
        ]
    },
    plugins: [],
    devtool: 'source-map',
    watch: false,
    stats: 'none'

};