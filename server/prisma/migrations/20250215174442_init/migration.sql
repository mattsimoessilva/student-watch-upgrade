-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'PROFESSOR', 'COORDINATOR');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coordinatorId" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shift" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,

    CONSTRAINT "Shift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "professorId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lecture" (
    "id" SERIAL NOT NULL,
    "shiftId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,

    CONSTRAINT "Lecture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeekDay" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "WeekDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LecturesAndWeekDays" (
    "lectureId" INTEGER NOT NULL,
    "weekDayId" INTEGER NOT NULL,

    CONSTRAINT "LecturesAndWeekDays_pkey" PRIMARY KEY ("lectureId","weekDayId")
);

-- CreateTable
CREATE TABLE "StudentsAndLectures" (
    "studentId" INTEGER NOT NULL,
    "lectureId" INTEGER NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudentsAndLectures_pkey" PRIMARY KEY ("studentId","lectureId")
);

-- CreateTable
CREATE TABLE "ProfessorsAndCourses" (
    "professorId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "ProfessorsAndCourses_pkey" PRIMARY KEY ("professorId","courseId")
);

-- CreateTable
CREATE TABLE "StudentsAndClasses" (
    "studentId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,

    CONSTRAINT "StudentsAndClasses_pkey" PRIMARY KEY ("studentId","classId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_registrationNumber_key" ON "User"("registrationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Course_name_key" ON "Course"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Course_description_key" ON "Course"("description");

-- CreateIndex
CREATE UNIQUE INDEX "Shift_name_key" ON "Shift"("name");

-- CreateIndex
CREATE UNIQUE INDEX "WeekDay_name_key" ON "WeekDay"("name");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_coordinatorId_fkey" FOREIGN KEY ("coordinatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lecture" ADD CONSTRAINT "Lecture_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lecture" ADD CONSTRAINT "Lecture_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LecturesAndWeekDays" ADD CONSTRAINT "LecturesAndWeekDays_lectureId_fkey" FOREIGN KEY ("lectureId") REFERENCES "Lecture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LecturesAndWeekDays" ADD CONSTRAINT "LecturesAndWeekDays_weekDayId_fkey" FOREIGN KEY ("weekDayId") REFERENCES "WeekDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentsAndLectures" ADD CONSTRAINT "StudentsAndLectures_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentsAndLectures" ADD CONSTRAINT "StudentsAndLectures_lectureId_fkey" FOREIGN KEY ("lectureId") REFERENCES "Lecture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorsAndCourses" ADD CONSTRAINT "ProfessorsAndCourses_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorsAndCourses" ADD CONSTRAINT "ProfessorsAndCourses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentsAndClasses" ADD CONSTRAINT "StudentsAndClasses_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentsAndClasses" ADD CONSTRAINT "StudentsAndClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
