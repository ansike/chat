import { Injectable } from '@nestjs/common';
import { GroupType } from './type';

@Injectable()
export class GroupService {
  groupList(): GroupType[] {
    return [
      {
        id: '1',
        name: '小组1',
        teams: [],
        latestMsg: 'hello world',
        latestMsgDate: new Date(),
        createTime: new Date(),
      },
      {
        id: '2',
        name: '小组2',
        teams: [],
        latestMsg: 'hi',
        latestMsgDate: new Date(),
        createTime: new Date(),
      },
      {
        id: '3',
        name: '小组3',
        teams: [],
        latestMsg: 'hi',
        latestMsgDate: new Date(),
        createTime: new Date(),
      },
    ];
  }
}
