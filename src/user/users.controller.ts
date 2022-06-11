import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get()
  index(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  insert(@Body() createUser: CreateUserDto) {
    return this.usersService.create(createUser);
  }

  @Get('/:id')
  findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.BAD_REQUEST})) id: number): Promise<User> {
    console.log(id)
    return this.usersService.findOne(id);
  }

  @Put('/:id')
  updateOne(@Param() params, @Body() updateUser: UpdateUserDto): Promise<User> {
    return this.usersService.updateData(params.id, updateUser)
  }

  @Delete('/:id/delete')
  removeData(@Param() params): Promise<User[]> {
    return this.usersService.removeUser(params.id)
  }
}
