import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  userList(): string[] {
    return ['user1', 'user2'];
  }
}
