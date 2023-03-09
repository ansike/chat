import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './service';
import { CreateUserDto } from './dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  list() {
    return this.userService.userList();
  }
  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('/deleteAll')
  deleteAll() {
    return this.userService.delete();
  }
}
