import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { Prisma } from '@prisma/client';
import { ApiBody } from '@nestjs/swagger';

@Controller('shifts')
export class ShiftsController {
  constructor(private readonly shiftsService: ShiftsService) {}

  @Post()
  createShift(@Body() createShiftDto: Prisma.ShiftCreateInput) {
    return this.shiftsService.createShift(createShiftDto);
  }

  @Get()
  getAllShifts() {
    return this.shiftsService.getAllShifts();
  }

  @Get(':id')
  getShiftById(@Param('id') id: string) {
    return this.shiftsService.getShiftById(+id);
  }

  @Patch(':id')
  updateShift(
    @Param('id') id: string,
    @Body() updateShiftDto: Prisma.ShiftUpdateInput,
  ) {
    return this.shiftsService.updateShift(+id, updateShiftDto);
  }

  @Delete(':id')
  deleteShift(@Param('id') id: string) {
    return this.shiftsService.deleteShift(+id);
  }
}
