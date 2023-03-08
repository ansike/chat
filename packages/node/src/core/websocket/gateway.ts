import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MsgType } from './type';

@WebSocketGateway(5001, {
  cors: {
    origin: '*',
  },
})
export class Gateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('msg')
  findAll(@MessageBody() data: any): WsResponse<any> {
    const { uid, msg } = JSON.parse(data);
    return {
      event: 'msg',
      data: {
        uid: uid + 1,
        msg: '我是3号' + msg,
      },
    };
  }

  @SubscribeMessage('allMsg')
  async allMsg(): Promise<WsResponse<MsgType[]>> {
    return {
      event: 'allMsg',
      data: [
        {
          id: '1',
          groupId: '1',
          uid: '1',
          content:
            'hi,hi,hihi,hi,hi,hihihi,hi,hihihi,hi,hihihi,hi,hihihi,hi,hihihi,hi,hihihi,hi,hihi',
          createDate: '',
        },
        {
          id: '2',
          groupId: '1',
          uid: '2',
          content: 'hello',
          createDate: '',
        },
      ],
    };
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}
