import { DefaultEventsMap } from "@socket.io/component-emitter";
import { Socket, io } from "socket.io-client";

const SOCKET_KEY = {
  // 发送和返回普通消息的key
  MSG_KEY: "msg",
  // 拉取所有消息的key
  ALL_MSG: "allMsg",
  // TODO 有时间考虑分页
};

class SelfSocket {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  static instance: SelfSocket | null = null;
  static getInstance() {
    if (!this.instance) {
      this.instance = new SelfSocket();
    }
    return this.instance.socket;
  }
  constructor() {
    const socket = io("http://localhost:5001");

    socket.on("connect", function () {
      console.log("Connected");

      // socket.emit("events", { test: "test" });
      socket.emit("identity", 0, (response: any) =>
        console.log("Identity:", response)
      );
    });

    socket.on("exception", function (e: any) {
      console.log("event", e);
    });

    socket.on("disconnect", function () {
      console.log("Disconnected");
    });
    this.socket = socket;
  }
}
const socket = SelfSocket.getInstance();

export { socket, SOCKET_KEY };
