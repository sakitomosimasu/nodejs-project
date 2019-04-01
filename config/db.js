//链接数据库的js文件
const mongoose = require('mongoose');

//定义连接的地址 hello代表着数据库的名字
const url = 'mongodb://localhost:27017/hello';

//链接
//1.链接地址 2.使用新的解析url地址的方式
mongoose.connect(url,{useNewUrlParser:true})
.then(()=>{
    console.log('数据库链接成功');
})
.catch(error=>{
    console.log('数据库链接失败',error);
})
//4.暴露
module.exports = mongoose;