'use strict';

const htmlLoader = require('../loaders/htmlLoader');

module.exports = {
    src: ['views/**/*.html'],
    rely: [
        'build.css',
        'build.lib.js',
        'build.modules.views'
    ],
    dest: 'views',
    loader: htmlLoader(),
    watch: ['components/**/*', 'assets/**/*', 'config/**/*', 'services/**/*', 'templates/**/*', 'views/**/*']
};