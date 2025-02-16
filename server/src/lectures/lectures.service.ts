import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class LecturesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createLecture(createLectureDto: Prisma.LectureCreateInput) {
    return this.databaseService.lecture.create({
      data: createLectureDto
    })
  }

  async getAllLectures() {
    return this.databaseService.lecture.findMany()
  }

  async getLectureById(id: number) {
    return this.databaseService.lecture.findUnique({
      where: {
        id,
      }
    })
  }

  async updateLecture(id: number, updateLectureDto: Prisma.LectureUpdateInput) {
    return this.databaseService.lecture.update({
      where: {
        id,
      },
      data: updateLectureDto
    })
  }

  async deleteLecture(id: number) {
    return this.databaseService.lecture.delete({
      where: {
        id,
      }
    })
  }
}
