import { Controller, Get } from '@nestjs/common';
import { UserService } from './service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  getHello(): string[] {
    return this.userService.userList();
  }
}
