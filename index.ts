//简单构建一个接口供前端调用
const express = require('express')
const app = express();
// 因为jsonp只能发送get请求，所以后端这里也要设置
// res就是后端传给前端的一个值
app.get('/api/jsonp', (req, res) => {
    //通过query传递data
    const {callback} = req.query;
    res.send(`${callback}('hello jsonp')`);
})

app.get('/api/jsonp', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({name:'nanshida'})
})

// 监听端口号
app.listen(3000,() => {
    console.log('Server is running at http://localhost:3000')
})
// 执行node index.ts发现启动端口号http://localhost:3000/api/jsonp?callback=test能访问数据