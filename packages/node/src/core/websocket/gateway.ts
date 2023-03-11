import {
  MessageBody,
  OnGatewayConnection,
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
import { User, UserDocument } from '../user/schema';

@Injectable()
@WebSocketGateway(5001, {
  cors: {
    origin: '*',
  },
})
export class Gateway {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  @WebSocketServer()
  server: Server;
  connectors: string[] = [];

  @SubscribeMessage('msg')
  async msg(@MessageBody() data: any): Promise<void> {
    const { uid, gid, msg } = data;
    const user = await this.userModel
      .findOne({ _id: new ObjectId(uid) })
      .exec();

    if (!user) {
      console.log(`非法用户 uid:${uid}, msg: ${msg}`);
      return;
    }

    const msgObj = await this.messageModel.create({
      msg,
      creator: new ObjectId(uid),
      group: gid,
    });
    const clients = Array.from(this.server.sockets.sockets.values());
    clients.forEach((client) =>
      client.emit('msg', {
        ...msgObj.toObject(),
        creator: user,
      }),
    );
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
    this.connectors.push();
    return this.connectors;
  }
}
