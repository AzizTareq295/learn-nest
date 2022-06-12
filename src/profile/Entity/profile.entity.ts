import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { User } from "src/user/user.entity";

@Entity('profiles')
export class ProfileE extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  image: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User

}