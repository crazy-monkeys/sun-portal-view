'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
    NODE_ENV: '"testing"',
    API_ROOT: '"https://sunportalfb3323b80.cn1.hana.ondemand.com/sun-portal-api"'
})