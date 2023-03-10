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
import { ObjectId } from 'mongodb';

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
  async msg(@MessageBody() data: any): Promise<void> {
    console.log(data);
    const { uid, gid, msg } = data;
    const sData = {
      msg,
      creator: new ObjectId(uid),
      group: gid,
    };
    await this.messageModel.create(sData);
    this.server.to(this.connectors).emit('msg', sData);
  }

  @SubscribeMessage('allMsg')
  async allMsg(@MessageBody() gid: string): Promise<WsResponse<Message[]>> {
    const msgs = await this.messageModel
      .aggregate([
        { $match: { group: gid } },
        {
          $lookup: {
            from: 'users',
            localField: 'creator',
            foreignField: '_id',
            as: 'creatorDetails',
          },
        },
        { $unwind: '$creatorDetails' },
        {
          $project: {
            _id: 1,
            msg: 1,
            creator: '$creatorDetails',
            group: 1,
            created_at: 1,
            update_at: 1,
          },
        },
      ])
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
