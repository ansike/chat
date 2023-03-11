import { Module } from '@nestjs/common';
import { GroupService } from './service';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupSchema } from './schemas/group';
import { Message, MessageSchema } from './schemas/message';
import { GroupResolver } from './resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }]),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  controllers: [],
  providers: [GroupService, GroupResolver],
})
export class GroupModule {}
