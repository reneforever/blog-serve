const mongoose = require('mongoose');

mongoose.connect('mongodb://148.70.214.82:27017/blog',{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>console.log('数据库连接成功'))
    .catch(()=>console.log("数据库连接失败"))