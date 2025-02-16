import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class WeekDaysService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createWeekDay(createWeekDayDto: Prisma.WeekDayCreateInput) {
    return this.databaseService.weekDay.create({
      data: createWeekDayDto
    })
  }

  async getAllWeekDays() {
    return this.databaseService.weekDay.findMany()
  }

  async getWeekDayById(id: number) {
    return this.databaseService.weekDay.findUnique({
      where: {
        id,
      }
    })
  }

  async updateWeekDay(id: number, updateWeekDayDto: Prisma.WeekDayUpdateInput) {
    return this.databaseService.weekDay.update({
      where: {
        id,
      },
      data: updateWeekDayDto
    })
  }

  async deleteWeekDay(id: number) {
    return this.databaseService.weekDay.delete({
      where: {
        id,
      }
    })
  }
}
