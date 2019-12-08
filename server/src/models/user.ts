import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Length, IsEmail } from "class-validator";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  @Length(5, 50)
  username: string;

  @Column("varchar")
  @Length(5, 50)
  @IsEmail()
  email: string;

  @Column("varchar")
  @Length(5, 50)
  password: string;

  @Column("varchar")
  @Length(5, 20)
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
