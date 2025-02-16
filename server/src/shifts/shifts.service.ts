import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ShiftsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createShift(createShiftDto: Prisma.ShiftCreateInput) {
    return this.databaseService.shift.create({
      data: createShiftDto,
    });
  }

  async getAllShifts() {
    return this.databaseService.shift.findMany()
  }

  async getShiftById(id: number) {
    return this.databaseService.shift.findUnique({
      where: {
        id,
      }
    })
  }

  async updateShift(id: number, updateShiftDto: Prisma.ShiftUpdateInput) {
    return this.databaseService.shift.update({
      where: {
        id,
      },
      data: updateShiftDto
    })
  }

  async deleteShift(id: number) {
    return this.databaseService.shift.delete({
      where: {
        id,
      }
    })
  }
}
