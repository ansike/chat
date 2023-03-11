import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Gateway } from './gateway';
import { Message, MessageSchema } from '../group/schemas/message';
import { User, UserSchema } from '../user/schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [Gateway],
})
export class WebSocketModule {}
