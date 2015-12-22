'use strict';

var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        'angular2': [
            'rxjs',
            'reflect-metadata',
            'angular2/bundles/angular2-polyfills',
            'angular2/core',
            'angular2/router',
            'angular2/http'
        ],
        'app': './app/boot'
    },

    output: {
        path: __dirname + '/dist/',
        publicPath: 'dist/',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js',
        devtoolModuleFilenameTemplate: function(info) {
            return 'app/' + info.resourcePath.replace(__dirname, '../..').replace(/~/g, '/node_modules/');
        },
        //devtoolModuleFilenameTemplate: 'scripts/[resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.html']
    },

    module: {
        preLoaders: [{
            test: /\.ts$/,
            loader: 'tslint-loader'
        }],
        loaders: [{
                test: /\.ts$/,
                loader: 'ts',
                exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
            },
            // Support for *.json files.
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            // Support for CSS as raw text
            {
                test: /\.css$/,
                loader: 'raw-loader'
            },
            // support for .html as raw text
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ],
        noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/]
    },

    plugins: [
        new CommonsChunkPlugin({
            name: 'angular2',
            filename: 'angular2.js',
            minChunks: Infinity
        }),
        new CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js'
        }),
        new CopyWebpackPlugin([{
            from: 'app/index.html'
        }], {
            ignore: ['*.ts']
        })
    ]
}
