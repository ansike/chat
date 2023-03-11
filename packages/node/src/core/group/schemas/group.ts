import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<Group>;

@ObjectType()
@Schema()
export class Group {
  @Field((type) => ID)
  _id: string;

  @Field((type) => String)
  @Prop()
  name: string;

  @Field((type) => [ID])
  @Prop({ type: Types.ObjectId, ref: 'User' })
  members: Types.ObjectId[];

  @Field((type) => ID)
  @Prop({ ref: 'Message' })
  latestMsgId: Types.ObjectId;

  @Field((type) => String)
  @Prop({ default: '' })
  avatar: string;

  @Field((type) => Date)
  @Prop({ type: Date, default: Date.now })
  create_at: Date;

  @Field((type) => Date)
  @Prop({ type: Date, default: Date.now })
  update_at: Date;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
