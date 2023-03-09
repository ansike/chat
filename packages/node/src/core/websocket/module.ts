import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Gateway } from './gateway';
import { Message, MessageSchema } from '../group/schemas/message';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  providers: [Gateway],
})
export class WebSocketModule {}
