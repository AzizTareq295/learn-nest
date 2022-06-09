import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  findAll(): Promise<User[]> {
    // this.usersRepository.createQueryBuilder('users').getMany();
    return this.usersRepository.find();
  }

  async create(userData: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = userData.firstName;
    user.lastName = userData.lastName;
    user.email = userData.email;
    user.password = userData.password;
    return await user.save();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async updateData(id: number, data: UpdateUserDto): Promise<User> {
    const existantUser = await this.usersRepository.findOneBy({id});
    
    if (!existantUser) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'User not found',
      }, HttpStatus.FORBIDDEN);
    }
    
    await this.usersRepository.update({id}, {
      firstName: data.firstName,
      lastName: data.lastName
    })

    return this.usersRepository.findOneBy({id})
  }

  async removeUser(id: number): Promise<User[]> {
    await this.usersRepository.delete({id})

    return this.usersRepository.find()

  }

}