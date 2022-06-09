import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BaseEntity } from "typeorm";
import * as bcrypt from "bcrypt";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @BeforeInsert()
  async setPassword (password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}