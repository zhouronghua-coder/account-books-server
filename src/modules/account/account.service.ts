import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './account.dto';
import { Account } from './account.entity';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<Account>,
  ) {}

  async findAll(): Promise<any[]> {
    const allDayAccountList = await this.accountRepository.find({
      where: { userId: 1 },
    });
    return AccountService.generateData(allDayAccountList);
  }

  async findByMonth({ month }): Promise<any[]> {
    const allDayAccountList = await this.accountRepository
      .createQueryBuilder('account')
      .where('account.realCreateTime LIKE :month')
      .setParameters({ month: month + '%' })
      .orderBy('account.id', 'DESC')
      .getMany();
    return AccountService.generateData(allDayAccountList);
  }

  async create(creareDto: CreateAccountDto): Promise<any> {
    return this.accountRepository.save(creareDto);
  }

  async delete(id: number): Promise<any> {
    const accountToRemove = await this.accountRepository.findOne({
      where: { id },
    });
    return await this.accountRepository.remove(accountToRemove);
  }

  private static generateData(sourceData: Array<any>) {
    const onlyDayArr = [
      ...new Set(sourceData.map((account) => account.realCreateTime)),
    ];
    const res = onlyDayArr.map((day) => {
      const list = sourceData.filter((item) => item.realCreateTime === day);
      const allIncome = list.reduce((p, c) => {
        if (c.isIncome === 1) {
          return p + +c.count;
        } else return p;
      }, 0);
      const allExpend = list.reduce((p, c) => {
        if (c.isIncome === 0) {
          return p + +c.count;
        } else return p;
      }, 0);
      return {
        list,
        realCreateTime: day,
        allIncome,
        allExpend,
      };
    });
    return res;
  }
}
