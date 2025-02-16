import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WeekDaysService } from './week-days.service';
import { Prisma } from '@prisma/client';

@Controller('week-days')
export class WeekDaysController {
  constructor(private readonly weekDaysService: WeekDaysService) {}

  @Post()
  createWeekDay(@Body() createWeekDayDto: Prisma.WeekDayCreateInput) {
    return this.weekDaysService.createWeekDay(createWeekDayDto);
  }

  @Get()
  getAllWeekDays() {
    return this.weekDaysService.getAllWeekDays();
  }

  @Get(':id')
  getWeekDayById(@Param('id') id: string) {
    return this.weekDaysService.getWeekDayById(+id);
  }

  @Patch(':id')
  updateWeekDay(@Param('id') id: string, @Body() updateWeekDayDto: Prisma.WeekDayUpdateInput) {
    return this.weekDaysService.updateWeekDay(+id, updateWeekDayDto);
  }

  @Delete(':id')
  deleteWeekDay(@Param('id') id: string) {
    return this.weekDaysService.deleteWeekDay(+id);
  }
}
