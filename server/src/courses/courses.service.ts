import { Injectable } from '@nestjs/common';
import { Prisma, PrismaPromise } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CoursesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createCourse(createCourseDto: Prisma.CourseCreateInput) {
    return this.databaseService.course.create({
      data: createCourseDto,
    });
  }

  async getAllCourses() {
    return this.databaseService.course.findMany()
  }

  async getCourseById(id: number) {
    return this.databaseService.course.findUnique({
      where: {
        id,
      }
    })
  }

  async getCoursesByUserId(id: number, role: string) {
    if (role == "COORDINATOR") {
       return this.databaseService.course.findMany({
         where: {
           coordinatorId: id,
         },
       });
    }
    else if (role == "PROFESSOR") {
      const professorsAndCourses = await this.databaseService.professorsAndCourses.findMany({
        where: {
          professorId: id,
        }
      })

      let courseList = new Array<any>();

      for (const element of professorsAndCourses) {
        let course = await this.databaseService.course.findUnique({
          where: {
            id: element.courseId,
          }
        })

        courseList.push(course)
      }

      return courseList
    }
    else if (role == "STUDENT") {
      const studentsAndClasses= await this.databaseService.studentsAndClasses.findFirst({
        where: {
          studentId: id
        }
      })

      const studentClass = await this.databaseService.class.findUnique({
        where: {
          id: studentsAndClasses?.classId,
        },
      });

      const studentCourse = await this.databaseService.course.findUnique({
        where: {
          id: studentClass?.courseId
        }
      })

      return studentCourse
    }
    
   
  }

  async updateCourse(id: number, updateCourseDto: Prisma.CourseUpdateInput) {
    return this.databaseService.course.update({
      where: {
        id,
      },
      data: updateCourseDto
    })
  }

  async deleteCourse(id: number) {
    return this.databaseService.course.delete({
      where: {
        id,
      }
    })
  }
}
