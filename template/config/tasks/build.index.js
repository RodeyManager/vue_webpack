'use strict';

const env        = require('../app-env');
const htmlLoader = require('../loaders/htmlLoader');

module.exports = {
    src: 'index.html',
    rely: [
        'build.css',
        'build.lib.js',
        'build.modules.views'
    ],
    dest: env.dest.path,
    loader: htmlLoader(),
    watch: ['../src/**/*']
};