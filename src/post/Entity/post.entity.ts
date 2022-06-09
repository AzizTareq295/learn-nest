import { User } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from "typeorm";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  slug: string

  @Column()
  content: string

  @OneToOne(() => User)
  @JoinColumn()
  user: User

}