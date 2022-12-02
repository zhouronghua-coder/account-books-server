import {
  Body,
  Controller,
  Delete,
  Get,
  Query,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateAccountDto } from './account.dto';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  public async getAccount(@Query() { month }, @Request() req): Promise<any> {
    console.log(req.user);
    if (!month) {
      return this.accountService.findAll();
    }
    return this.accountService.findByMonth({ month });
  }

  @Post()
  public async createAccount(
    @Body() creareDto: CreateAccountDto,
  ): Promise<any> {
    return this.accountService.create(creareDto);
  }

  @Delete()
  public async deleteAccount(@Body() { id }: { id: number }): Promise<any> {
    return this.accountService.delete(id);
  }
}
