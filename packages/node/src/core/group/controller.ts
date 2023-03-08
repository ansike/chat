import { Controller, Get } from '@nestjs/common';
import { GroupService } from './service';
import { GroupType } from './type';

@Controller()
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get('/list')
  getHello(): GroupType[] {
    return this.groupService.groupList();
  }
}
