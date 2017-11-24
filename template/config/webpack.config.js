'use strict';

module.exports = (env) => env.isProduction
    ? require('./webpack.config.prd')
    : require('./webpack.config.dev');
