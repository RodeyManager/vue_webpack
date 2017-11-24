'use strict';

const jsLoader = require('../loaders/jsLoader');

module.exports = {
    src: [
        '../node_modules/axios/dist/axios.min.js',
        '../node_modules/vue/dist/vue.min.js'
    ],
    dest: 'assets/js',
    loader: Object.assign({
        'gulp-concat': 'libs.js'
    }, jsLoader())
};