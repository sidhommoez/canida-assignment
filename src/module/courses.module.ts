import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from 'src/controllers/rest/course.controller';
import { CourseRepository } from 'src/repository/course.repository';
import { ProfessorRepository } from 'src/repository/professor.repository';
import { StudentRepository } from 'src/repository/student.repository copy';
import { CourseService } from 'src/service/course.service';
import { ProfessorService } from 'src/service/professor.service';
import { StudentService } from 'src/service/student.service';

@Module({
    imports: [ConfigModule, TypeOrmModule.forFeature([StudentRepository, ProfessorRepository, CourseRepository])],
    controllers: [CourseController],
    providers: [StudentService,ProfessorService,CourseService],
    exports: [],
})
export class CoursesModule { }
