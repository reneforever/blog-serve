const express = require('express')

const home = express.Router()

home.get('/index',(req,res)=>{
  res.render('home/index')
})

module.exports = home