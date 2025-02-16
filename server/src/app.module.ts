import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { ShiftsModule } from './shifts/shifts.module';
import { ClassesModule } from './classes/classes.module';
import { LecturesModule } from './lectures/lectures.module';
import { WeekDaysModule } from './week-days/week-days.module';

@Module({
  imports: [DatabaseModule, UsersModule, CoursesModule, ShiftsModule, ClassesModule, LecturesModule, WeekDaysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
