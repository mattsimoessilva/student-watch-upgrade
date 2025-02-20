import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ClassesService } from 'src/classes/classes.service';
import { CoursesService } from 'src/courses/courses.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ClassesService, CoursesService],
})
export class UsersModule {}
