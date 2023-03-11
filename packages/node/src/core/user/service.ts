import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserInput): Promise<User> {
    return await this.userModel.create(createUserDto);
  }
  async userList(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async delete(): Promise<string> {
    await this.userModel.deleteMany().exec();
    return "success";
  }
}
