import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { ObjectType, Field, Int } from '@nestjs/graphql';
export type UserDocument = HydratedDocument<User>;

@ObjectType()
@Schema()
export class User {
  @Field((type) => String)
  _id: string;

  @Field((type) => String)
  @Prop()
  name: string;

  @Field((type) => Int)
  @Prop()
  age: number;

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

export const UserSchema = SchemaFactory.createForClass(User);
