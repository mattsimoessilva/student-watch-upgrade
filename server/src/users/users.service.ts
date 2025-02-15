import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createUser(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createUserDto
    })
  }

  async getAllUsers(role?: 'STUDENT' | 'PROFESSOR' | 'COORDINATOR') {
    if (role) return this.databaseService.user.findMany({
      where: {
        role,
      }
    })
    return this.databaseService.user.findMany()
  }

  async getUserById(id: number) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      }
    })
  }

  async updateUser(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto
    })
  }

  async deleteUser(id: number) {
    return this.databaseService.user.delete({
      where: {
        id,
      }
    });
  }
}
