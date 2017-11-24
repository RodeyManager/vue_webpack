/**
 * Build Tasks 应用编译相关任务
 */
'use strict';

module.exports = {
    // ---说明：单个任务配置
    'build.css': require('./tasks/build.css'),

    'build.lib.js': require('./tasks/build.lib'),

    'build.assets': require('./tasks/build.assets'),

    'build.modules.views': require('./tasks/build.modules.views'),

    'build.views': require('./tasks/build.views'),

    'build.index': require('./tasks/build.index')
};
