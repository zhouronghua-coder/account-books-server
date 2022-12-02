import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: any) {
    try {
      const passuser = await this.userService.find(user);
      return {
        access_token: this.jwtService.sign({
          username: user.username,
          userId: passuser.id,
        }),
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
