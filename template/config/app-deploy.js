/**
 * Deploy 应用部署相关, 可根据env设置对应的节点,支持多节点部署
 */
'use strict';

const env = require('./app-env');

module.exports = [
    {
        isExecute: false,
        host: '192.168.1.1',
        user: 'root',
        pass: 'root123',
        port: 22,
        timeout: 50000,
        // localPath: path.join(env.dest.path, '/**/*'),
        // filters: [],
        remotePath: '/var/www/moon'
    }
];
