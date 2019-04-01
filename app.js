const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/addUser',(req,res)=>{
    //1.得到前端传递过来的参数
    let uName = req.body.username;
    letuPwd = req.body.password;
    //2.效验参数
    
    //3.将数据写入到数据库中。

    res.send('注册成功');
})

app.listen(3000);