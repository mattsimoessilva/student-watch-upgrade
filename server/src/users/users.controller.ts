import { Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { UsersService } from './users.service';
import { CoursesService } from 'src/courses/courses.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly coursesService: CoursesService,
  ) {}

  @Post()
  createUser(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getAllUsers(@Query('role') role?: 'STUDENT' | 'PROFESSOR' | 'COORDINATOR') {
    return this.usersService.getAllUsers(role);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(+id);
  }

  @Get(':id/courses')
  getCoursesByUserId(@Param('id') id: string, @Param('role') role: string) {
    return this.coursesService.getCoursesByUserId(id, role);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.usersService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
