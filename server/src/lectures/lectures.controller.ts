import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LecturesService } from './lectures.service';
import { Prisma } from '@prisma/client';

@Controller('lectures')
export class LecturesController {
  constructor(private readonly lecturesService: LecturesService) {}

  @Post()
  createLecture(@Body() createLectureDto: Prisma.LectureCreateInput) {
    return this.lecturesService.createLecture(createLectureDto);
  }

  @Get()
  getAllLectures() {
    return this.lecturesService.getAllLectures();
  }

  @Get(':id')
  getLectureById(@Param('id') id: string) {
    return this.lecturesService.getLectureById(+id);
  }

  @Patch(':id')
  updateLecture(@Param('id') id: string, @Body() updateLectureDto: Prisma.LectureUpdateInput) {
    return this.lecturesService.updateLecture(+id, updateLectureDto);
  }

  @Delete(':id')
  deleteLecture(@Param('id') id: string) {
    return this.lecturesService.deleteLecture(+id);
  }
}
