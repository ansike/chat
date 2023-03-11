import { Module } from '@nestjs/common';
import { UserService } from './service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema';
import { UserResolver } from './resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [],
  providers: [UserService, UserResolver],
})
export class UserModule {}
