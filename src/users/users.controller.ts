import { Controller, Get, Post, Req, UseGuards, Param, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }



  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }


  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }


  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User>{
    return this.usersService.createUser(createUserDto.email, createUserDto.password , createUserDto.name);
  }
}
