import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Account } from '../account/account.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Account, (account) => account.userId)
  accounts: Account[];
  @CreateDateColumn({ nullable: true })
  createTime: Date | null;
  @UpdateDateColumn({ nullable: true })
  updateTime: Date | null;
  @DeleteDateColumn({ nullable: true })
  deleteTime: Date | null;
}
