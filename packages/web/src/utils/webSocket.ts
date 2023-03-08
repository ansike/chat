const ws = new WebSocket("ws://localhost:");
//监听WebSocket事件 open和WebSocket服务器连接成功触发
ws.addEventListener("open", () => {
  console.log("连接成功");
});

//接受websocket服务的消息
ws.addEventListener("message", (msg) => {
  console.log(msg.data);
});

ws.addEventListener("close", () => {
  console.log("服务断开");
});

export { ws };
