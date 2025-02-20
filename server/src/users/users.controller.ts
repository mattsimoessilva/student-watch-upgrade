import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req} from '@nestjs/common';
import { UsersService } from './users.service';
import { CoursesService } from 'src/courses/courses.service';
import { Prisma } from '@prisma/client';
import { ClassesService } from 'src/classes/classes.service';
import { ApiQuery } from '@nestjs/swagger';


@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly coursesService: CoursesService,
    private readonly classesService: ClassesService,
  ) {}


  @Post()
  createUser(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.createUser(createUserDto)
  }

  @Get()
  @ApiQuery({
    name: "role",
    required: false,
    type: undefined
  })
  getAllUsers(@Query('role') role?: 'STUDENT' | 'PROFESSOR' | 'COORDINATOR') {
    return this.usersService.getAllUsers(role)
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(+id)
  }

  @Get(':id/courses')
  getCoursesByUserId(@Param('id') id: string, @Query('role') role: string) {
    return this.coursesService.getCoursesByUserId(+id, role)
  }

  @Get(':id/classes')
  getClassesByUserId(@Param('id') id: string, @Query('role') role: string) {
    return this.classesService.getClassesByUserId(+id, role)
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.usersService.updateUser(+id, updateUserDto)
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id)
  }
}
