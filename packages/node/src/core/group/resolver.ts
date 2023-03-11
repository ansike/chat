import { Resolver, Query } from '@nestjs/graphql';
import { GroupService } from './service';
import { Injectable } from '@nestjs/common';
import { Group } from './schemas/group';

@Resolver((of) => Group)
@Injectable() // 标记为可注入的类
export class GroupResolver {
  constructor(private groupService: GroupService) {}

  @Query(() => [Group])
  async groups() {
    return this.groupService.groupList() as any;
  }
}
