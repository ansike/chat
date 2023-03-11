import { Field, InputType, Int } from '@nestjs/graphql';
// import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  name: string;
  age: number;
  avatar: string;
}

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  avatar: string; // age 字段是可选的

  @Field(() => Int)
  age: number; // age 字段是可选的
}