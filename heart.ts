const ws = require('ws');
// import ws from 'ws'
//创建socket服务8080端口
const wss=new ws.Server({port:8080},()=>{
    console.log('WebSocket Server is running at ws://localhost:8080/')
})
const state = {
    HEART:1, 
    MESSAGE:2
}

//监听客户端的连接
wss.on('connection',(socket)=>{
    //客户端连接成功后，推送欢迎消息
    console.log('客户端连接成功')
    //通过socket.on监听前端发送来的消息
    socket.on('message',(msg)=>{
        //将接收到的消息广播给所有客户端
        wss.clients.forEach((client) => {
            client.send(JSON.stringify({state:state.MESSAGE,message:"我是nodejs服务器，我收到你的消息了" + msg.toString()}))
        })
    // socket.send('我接受到数据了'+msg.toString())//单发消息只能让个人的应用收到，无法做到广播消息，wss.client能拿到
    // socket心跳监测
    let heartInreval =null;
    //心跳包
    const sendHeart=()=>{
        if(ws.readyState===ws.OPEN){
            ws.send(JSON.stringify({state:state.HEART,message:"心跳"}))
        }else{
            clearInterval(heartInreval);
        }
    }
    heartInreval = setInterval(sendHeart, 5000);
    })
})