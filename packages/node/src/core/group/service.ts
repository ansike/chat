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
          {
            _id: '6409e8d85b1bee16ec3bc85a',
            name: '小C',
            age: 11,
            avatar: '',
            created_at: '2023-03-09T14:10:32.986Z',
            update_at: '2023-03-09T14:10:32.987Z',
          },
          {
            _id: '6409e8df5b1bee16ec3bc85c',
            name: '小A',
            age: 11,
            avatar: '',
            created_at: '2023-03-09T14:10:39.451Z',
            update_at: '2023-03-09T14:10:39.451Z',
          },
          {
            _id: '6409e8e35b1bee16ec3bc85e',
            name: '小B',
            age: 11,
            avatar: '',
            created_at: '2023-03-09T14:10:43.248Z',
            update_at: '2023-03-09T14:10:43.248Z',
          },
        ],
        latestMsgId: '6409e8d85b1bee16ec3bc85a1',
        avatar: '',
        created_at: new Date('2023-03-09T14:10:39.451Z'),
        update_at: new Date('2023-03-09T14:10:39.451Z'),
      },
      {
        _id: '2',
        name: '小组2',
        members: [],
        latestMsgId: '6409e8d85b1bee16ec3bc85a2',
        avatar: '',
        created_at: new Date('2023-03-09T14:10:39.451Z'),
        update_at: new Date('2023-03-09T14:10:39.451Z'),
      },
      {
        _id: '3',
        name: '小组3',
        members: [],
        latestMsgId: '6409e8d85b1bee16ec3bc85a3',
        avatar: '',
        created_at: new Date('2023-03-09T14:10:39.451Z'),
        update_at: new Date('2023-03-09T14:10:39.451Z'),
      },
    ];
  }
}
