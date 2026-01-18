import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Controller('user')
export class UserController {
  @Post()
  @HttpCode(204)
  createUser(@Body() body: CreateUserDto) {
    return 'This action adds a new user';
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return 'This action returns the user with the specified id';
  }

  @Get()
  getAllUsers() {
    return 'This action returns all users';
  }

  @Put(':id')
  updateUser(@Body() body: UpdateUserDto, @Param('id') id: string) {
    return 'This action updates the user with the specified id';
  }

  @Delete(':id')
  deleteUser() {
    return 'This action removes the user with the specified id';
  }
}
