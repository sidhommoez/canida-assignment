import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseRepository } from 'src/repository/course.repository';
import { Errors } from 'src/shared/Exceptions/enums/eng-errors.enum';
import { FindManyOptions, FindOneOptions } from 'typeorm';

import { CourseDTO } from './dto/course.dto';
import { CourseMapper } from './mapper/course.mapper';

@Injectable()
export class CourseService {
    constructor(@InjectRepository(CourseRepository) private courseRepository: CourseRepository) { }

    async findById(id: string): Promise<CourseDTO | undefined> {
        const result = await this.courseRepository.findOne(id, { relations: ['professor','students'] });
        return CourseMapper.fromEntityToDTO(result);
    }

    async findByfields(options: FindOneOptions<CourseDTO>): Promise<CourseDTO | undefined> {
        const result = await this.courseRepository.findOne(options);
        return CourseMapper.fromEntityToDTO(result);
    }

    async find(options: FindManyOptions<CourseDTO>): Promise<CourseDTO | undefined> {
        const result = await this.courseRepository.findOne(options);
        return CourseMapper.fromEntityToDTO(result);
    }

    async getCourseNameById(id: string): Promise<{ givenName: string; }> {
        const course = await this.returnCourseIfExistsById(id);
        return { givenName: course.givenName }
    }

    async findAndCount(options: FindManyOptions<CourseDTO>): Promise<[CourseDTO[], number]> {
        const resultList = await this.courseRepository.findAndCount(options);
        const courcesDTO: CourseDTO[] = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(cource => courcesDTO.push(CourseMapper.fromEntityToDTO(cource)));
            resultList[0] = courcesDTO;
        }
        return resultList;
    }

    async returnCourseIfExistsById(id: string) {
        const courseExists = await this.findById(id);
        if (!courseExists) {
            throw new NotFoundException(Errors.USER_NOT_FOUND);
        } else {
            return courseExists;
        }
    }
}
