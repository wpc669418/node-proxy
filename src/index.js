// @ts-nocheck
const express = require('express')
const chalk = require('chalk')
const {getAliasAddress } = require('./utils')
const { createProxyMiddleware } = require('http-proxy-middleware')

// 根据应用名称 引入代理配置文件 默认是link-mcn的项目 ./config/link-mcn.js
const { URL_MPS, PORT } = require('./config/link-web-bee-information')

const app = express()

URL_MPS.forEach(item => {
  app.use(item.prefixPath, createProxyMiddleware({
    target: item.target,
    changeOrigin: true, 
    pathRewrite: item.pathRewrite? item.pathRewrite : {},
  }))
})

app.listen(PORT)

console.log(`${chalk.bgGreen('[DONE]')}:Compiled successfully !`)
console.log(`- Local     (本地地址):   ${chalk.blue(`http://localhost:${PORT}`)}`)
console.log(`- Network (局域网地址):   ${chalk.blue(`http://${getAliasAddress()}:${PORT}`)}`)
