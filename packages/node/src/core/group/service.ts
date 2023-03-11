import { Injectable } from '@nestjs/common';
// import { Group } from './schemas/group';

@Injectable()
export class GroupService {
  groupList(): any[] {
    return [
      {
        _id: '1',
        name: '小组1',
        members: [
          '640c231e257f76ebe96611e1',
          '640c232f257f76ebe96611e5',
          '640c2337257f76ebe96611e8',
        ],
        latestMsgId: '6409e8d85b1bee16ec3bc85a1',
        avatar: '',
        create_at: new Date('2023-03-09T14:10:39.451Z'),
        update_at: new Date('2023-03-09T14:10:39.451Z'),
      },
      {
        _id: '2',
        name: '小组2',
        members: [
          '640c231e257f76ebe96611e1',
          '640c232f257f76ebe96611e5',
          '640c2337257f76ebe96611e8',
          '640c2368257f76ebe96611ec',
        ],
        latestMsgId: '6409e8d85b1bee16ec3bc85a2',
        avatar: '',
        create_at: new Date('2023-03-09T14:10:39.451Z'),
        update_at: new Date('2023-03-09T14:10:39.451Z'),
      },
      {
        _id: '3',
        name: '小组3',
        members: [
          '640c231e257f76ebe96611e1',
          '640c232f257f76ebe96611e5',
          '640c2337257f76ebe96611e8',
          '640c236c257f76ebe96611ef',
        ],
        latestMsgId: '6409e8d85b1bee16ec3bc85a3',
        avatar: '',
        create_at: new Date('2023-03-09T14:10:39.451Z'),
        update_at: new Date('2023-03-09T14:10:39.451Z'),
      },
    ];
  }
}
