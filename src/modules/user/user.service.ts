import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}
  async create(user: CreateUserDto) {
    const password = await argon2.hash(user.password);
    this.userRepository.save({ username: user.username, password });
  }

  async find(userDto: CreateUserDto) {
    const { username, password } = userDto;
    const user = await this.userRepository.findOne({
      where: { username },
    });
    if (!user) throw new BadRequestException('用户名或密码输入有误');
    const psMatch = await argon2.verify(user.password, password);
    if (!psMatch) throw new BadRequestException('用户名或密码输入有误');
    delete user.password;
    return user;
  }
  async findOne(username: string) {
    const user = await this.userRepository.findOne({
      where: { username },
    });
    return user;
  }
}
