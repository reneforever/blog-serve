const express = require('express')
const path = require('path')

// 服务器搭建
const app = express(); 

// 数据库连接
require('./model/connect')

// 提供模板位置及默认后缀
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art')
// 默认art的模板引擎
app.engine('art', require('express-art-template'))

// 开放静态资源
app.use(express.static(path.join(__dirname,'public')))
// 引入路由
const home = require('./router/home')
const admin = require('./router/admin')
// 匹配的请求路径
app.use('/home',home)
app.use('/admin',admin)

// 端口
app.listen(80)
console.log('服务器启动成功')