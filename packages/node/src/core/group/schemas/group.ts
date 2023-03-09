import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type GroupDocument = HydratedDocument<Group>;

@Schema()
export class Group {
  @Prop()
  name: string;

  @Prop({ ref: 'User' })
  members: Types.ObjectId[];

  @Prop({ref: 'Message' })
  latestMsgId: Types.ObjectId;

  @Prop({ default: '' })
  avatar: string;

  @Prop({ type: Date, default: Date.now })
  created_at: Date;

  @Prop({ type: Date, default: Date.now })
  update_at: Date;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
