import { Controller, Get, Post, Param, Body, Query, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('query')
  async findByFilter(@Query() query): Promise<User> {
    return this.usersService.getUserById(query);
  }


  @Get('getAll')
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }


  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto.email, createUserDto.password, createUserDto.name);
  }


  @UseGuards(JwtAuthGuard)
  @Get('me')
  me(@Req() request) {
    const userId = request.user.userId;
    return this.usersService.getUserById(userId);
  }
}
