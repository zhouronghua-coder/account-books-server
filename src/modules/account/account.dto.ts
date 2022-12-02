import { IsNotEmpty } from 'class-validator';
export class CreateAccountDto {
  @IsNotEmpty({ message: '$property:账单是否为收入不能为空' })
  isIncome: number;

  @IsNotEmpty({ message: '$property:账单类型不能为空' })
  type: string;

  @IsNotEmpty({ message: '$property:账单时间不能为空' })
  realCreateTime: Date;

  @IsNotEmpty({ message: '$property:账单icon不能为空' })
  icon: string;
}
