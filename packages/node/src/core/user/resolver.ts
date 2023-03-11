import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './schema';
import { UserService } from './service';
import { CreateUserInput } from './dto';
import { Injectable } from '@nestjs/common';

@Resolver((of) => User)
@Injectable() // 标记为可注入的类
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users() {

    return this.userService.userList();
  }
  @Mutation(() => User)
  async createUser(@Args('createUserInput') createInput: CreateUserInput): Promise<User> {
    return this.userService.create(createInput);
  }
}
