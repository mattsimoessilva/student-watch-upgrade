import { Module } from '@nestjs/common';
import { WeekDaysService } from './week-days.service';
import { WeekDaysController } from './week-days.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [WeekDaysController],
  providers: [WeekDaysService],
})
export class WeekDaysModule {}
