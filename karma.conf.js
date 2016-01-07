'use strict';
var path = require('path');
var webpackConfig = require('./webpack.config');

module.exports = function(config) {
    var _config = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // we are building the test environment in ./spec-bundle.js
            {
                pattern: 'spec-bundle.js',
                watched: false
            }
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'spec-bundle.js': ['webpack', 'sourcemap']
                // 'test/**/*.spec.ts': ['webpack', 'sourcemap']
        },

        webpack: {
            debug: false,
            resolve: {
                cache: false,
                root: __dirname,
                extensions: ['', '.ts', '.js', '.json', '.css', '.html', '.scss', '.sass']
            },
            devtool: 'inline-source-map',
            isparta: {
                embedSource: true,
                noAutoWrap: true,
                babel: {
                    plugins: [
                        "angular2-annotations",
                        "transform-decorators-legacy",
                        "transform-class-properties",
                        "transform-flow-strip-types"
                    ],
                    presets: ['es2015']
                }
            },
            module: {
                loaders: webpackConfig.module.loaders,
                spreLoaders: [
                    // instrument only testing sources with Istanbul
                    {
                        test: /\.(js|ts)$/,
                        include: path.resolve('client'),
                        loader: 'iparta-loader',
                        exclude: [/\.e2e\.ts$/, /\.e2e\.js$/, /node_modules/, /\.spec\.ts$/, /\.spec\.js$/]
                    }
                ]
            },
            stats: {
                colors: true,
                reasons: true
            },
            noParse: webpackConfig.noParse
        },
        coverageReporter: {
            dir: 'coverage/unit',
            reporters: [{
                type: 'json'
            }, {
                type: 'text'
            }, {
                type: 'text-summary'
            }, {
                type: 'cobertura',
                file: 'coverage.xml'
            }, {
                type: 'lcov'
            }]
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    };

    config.set(_config);

};
