import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ClassesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createClass(createClassDto: Prisma.ClassCreateInput) {
    return this.databaseService.class.create({
      data: createClassDto
    })
  }

  async getAllClasses(term?: number) {
    return this.databaseService.class.findMany({
      where: {
        term: term,
      }
    })
  }

  async getClassById(id: number) {
    return this.databaseService.class.findUnique({
      where: {
        id,
      }
    })
  }

  async getClassesByUserId(id: number, role: string) {
    if (role == "STUDENT") {
      const studentsAndClasses =
        await this.databaseService.studentsAndClasses.findMany({
          where: {
            studentId: id,
          },
        });

      let classList = new Array<any>();

      for (const element of studentsAndClasses) {
        let classObject = await this.databaseService.class.findUnique({
          where: {
            id: element.classId,
          },
        });

        classList.push(classObject);
      }

      return classList;
    }
    else if (role == "PROFESSOR") {
      const classList = await this.databaseService.class.findMany({
        where: {
          professorId: id,
        },
      });

      return classList
    }
  }

  async getClassesByCourseId(id: number) {
    return this.databaseService.class.findMany({
      where: {
        courseId: id,
      }
    })
  }

  async updateClass(id: number, updateClassDto: Prisma.ClassUpdateInput) {
    return this.databaseService.class.update({
      where: {
        id,
      },
      data: updateClassDto
    })
  }

  async deleteClass(id: number) {
    return this.databaseService.user.delete({
      where: {
        id,
      }
    })
  }
}
