import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupModule } from './core/group/module';
import { UserModule } from './core/user/module';
import { WebSocketModule } from './core/websocket/module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/chat'),
    WebSocketModule,
    GroupModule,
    UserModule,
    RouterModule.register([
      {
        path: 'api',
        children: [
          {
            path: '/group',
            module: GroupModule,
          },
          {
            path: '/user',
            module: UserModule,
          },
        ],
      },
    ]),
  ],
})
export class AppModule {}
