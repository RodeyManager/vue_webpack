'use strict';

const env = require('../app-env');

module.exports = function jsLoaders(){
    return {
        'gulp-jsminer': {
            _if: false, preserveComments: '!'
        }
    }
};