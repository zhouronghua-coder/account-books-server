import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, nullable: true })
  remark: string;

  @Column('text')
  type: string;

  @Column()
  icon: string;

  @Column('date')
  realCreateTime: Date;

  @Column()
  isIncome: number;

  @Column()
  count: string;

  @Column()
  userId: number;
  @ManyToOne(() => User, (user) => user.accounts)
  user: User;
  @CreateDateColumn({ nullable: true })
  createTime: Date | null;
  @UpdateDateColumn({ nullable: true })
  updateTime: Date | null;
  @DeleteDateColumn({ nullable: true })
  deleteTime: Date | null;
}
