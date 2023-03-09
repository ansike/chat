import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from '../group/schemas/message';
import { Model } from 'mongoose';

@Injectable()
@WebSocketGateway(5001, {
  cors: {
    origin: '*',
  },
})
export class Gateway {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}
  @WebSocketServer()
  server: Server;
  connectors: string[] = [];

  @SubscribeMessage('msg')
  async msg(@MessageBody() data: any): Promise<WsResponse<any>> {
    console.log(data);
    const { uid, gid, msg } = data;
    await this.messageModel.create({
      msg,
      creator: uid,
      group: gid,
    });

    // 通知其他连接者
    return {
      event: 'msg',
      data: {
        uid: uid + 1,
        msg: '我是3号' + msg,
      },
    };
  }

  @SubscribeMessage('allMsg')
  async allMsg(@MessageBody() gid: string): Promise<WsResponse<Message[]>> {
    const msgs = await this.messageModel
      .find({
        group: gid,
      })
      .exec();
    return {
      event: 'allMsg',
      data: msgs,
    };
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() uid: string): Promise<string[]> {
    this.connectors = Array.from(new Set([...this.connectors, uid]));
    return this.connectors;
  }
}
