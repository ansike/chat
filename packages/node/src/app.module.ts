import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { GroupModule } from './core/group/module';
import { UserModule } from './core/user/module';

@Module({
  imports: [
    GroupModule,
    UserModule,
    RouterModule.register([
      {
        path: 'api',
        children: [
          {
            path: '/group',
            module: GroupModule,
          },
          {
            path: '/user',
            module: UserModule,
          },
        ],
      },
    ]),
  ],
})
export class AppModule {}
