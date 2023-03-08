import { Module } from '@nestjs/common';
import { GroupController } from './controller';
import { GroupService } from './service';

@Module({
  imports: [],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
