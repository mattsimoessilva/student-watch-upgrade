import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Prisma } from '@prisma/client';
import { ClassesService } from 'src/classes/classes.service';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly classesService: ClassesService
  ) {}

  @Post()
  createCourse(@Body() createCourseDto: Prisma.CourseCreateInput) {
    return this.coursesService.createCourse(createCourseDto);
  }

  @Get()
  getAllCourses() {
    return this.coursesService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id: string) {
    return this.coursesService.getCourseById(+id);
  }

  @Get(':id/classes')
  getClassesByCourseId(@Param('id') id: string) {
    return this.classesService.getClassesByCourseId(+id);
  }

  @Patch(':id')
  updateCourse(@Param('id') id: string, @Body() updateCourseDto: Prisma.CourseUpdateInput) {
    return this.coursesService.updateCourse(+id, updateCourseDto);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.coursesService.deleteCourse(+id);
  }
}
