import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { Prisma } from '@prisma/client';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  createClass(@Body() createClassDto: Prisma.ClassCreateInput) {
    return this.classesService.createClass(createClassDto)
  }

  @Get()
  getAllClasses(@Query('term') term?: number) {
    return this.classesService.getAllClasses(term)
  }

  @Get(':id')
  getClassById(@Param('id') id: string) {
    return this.classesService.getClassById(+id)
  }

  @Patch(':id')
  updateClass(@Param('id') id: string, @Body() updateClassDto: Prisma.ClassUpdateInput) {
    return this.classesService.updateClass(+id, updateClassDto)
  }

  @Delete(':id')
  deleteClass(@Param('id') id: string) {
    return this.classesService.deleteClass(+id)
  }
}
