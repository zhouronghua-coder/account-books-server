import { IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty({ message: '$property:用户名不能为空' })
  username: string;
  @IsNotEmpty({ message: '$property:密码不能为空' })
  password: string;
}

export class LoginUserDto {
  @IsNotEmpty({ message: '$property:用户名不能为空' })
  username: string;
  @IsNotEmpty({ message: '$property:密码不能为空' })
  password: string;
}
