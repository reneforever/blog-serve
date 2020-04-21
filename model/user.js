// 创建用户集合
const mongoose = require('mongoose')
// 创建用户集合规则
const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20
  },
  email:{
    type: String,
    require: true,
    // 重复邮箱地址检查
    unique: true
  },
  password:{
    type: String,
    require: true
  },
  // admin 超级管理员
  // normal 用户
  role:{
    type: String,
    require: true
  },
  //0为启用状态
  //1为禁用状态
  state:{
    type: Number,
    default: 0
  }
})
// 创建集合导出
const User = mongoose.model('User',userSchema)

// 尝试创建用户检查创建功能，保留初始admin
// User.create({
//   username: 'rene',
//   email: '464637243@qq.com',
//   password: 'wsawsdws95',
//   role: 'admin',
//   state: 0
// }).then(()=>{
//   console.log('用户创建成功')
// }).catch(()=>{
//   console.log('用户创建失败')
// })

module.exports = {
  User
}
