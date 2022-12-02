import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto, LoginUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('/register')
  register(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
  @Post('/login')
  login(@Body() user: LoginUserDto) {
    return this.authService.login(user);
  }
}
