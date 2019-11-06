'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_ROOT: '"http://portal-sit.threeape.cn/sun-portal-api"'
        // API_ROOT: '"http://192.168.101.3:1024/sun-portal-api"'
        // API_ROOT: '"http://192.168.101.6:8080/sun-portal-api"'
        // API_ROOT: '"http://10.1.60.90:8080/sun-portal-api"'

})