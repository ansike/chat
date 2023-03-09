import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, Date } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop()
  msg: string;

  @Prop({ ref: 'User' })
  creator: Types.ObjectId;

  @Prop({ ref: 'Group' })
  group: Types.ObjectId;

  @Prop({ type: Date, default: Date.now })
  created_at: Date;

  @Prop({ type: Date, default: Date.now })
  update_at: Date;

  // TODO 消息被引用
  // TODO 消息中是否@了他人及@人的ObjectId[]
}

export const MessageSchema = SchemaFactory.createForClass(Message);
