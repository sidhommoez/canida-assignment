import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentRepository } from 'src/repository/student.repository copy';
import { Errors } from 'src/shared/Exceptions/enums/eng-errors.enum';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { StudentDTO } from './dto/student.dto';
import { StudentMapper } from './mapper/student.mapper';


@Injectable()
export class StudentService {
    constructor(@InjectRepository(StudentRepository) private studentRepository: StudentRepository) { }

    async findById(id: string): Promise<StudentDTO | undefined> {
        const result = await this.studentRepository.findOne(id);
        return StudentMapper.fromEntityToDTO(result);
    }

    async findByfields(options: FindOneOptions<StudentDTO>): Promise<StudentDTO | undefined> {
        const result = await this.studentRepository.findOne(options);
        return StudentMapper.fromEntityToDTO(result);
    }

    async find(options: FindManyOptions<StudentDTO>): Promise<StudentDTO | undefined> {
        const result = await this.studentRepository.findOne(options);
        return StudentMapper.fromEntityToDTO(result);
    }

    async findAndCount(options: FindManyOptions<StudentDTO>): Promise<[StudentDTO[], number]> {
        const resultList = await this.studentRepository.findAndCount(options);
        const studentsDTO: StudentDTO[] = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(student => studentsDTO.push(StudentMapper.fromEntityToDTO(student)));
            resultList[0] = studentsDTO;
        }
        return resultList;
    }

    async getStudentNameById(id: string): Promise<{ givenName: string; }> {
        const student = await this.returnStudentIfExistsById(id);
        return { givenName: student.givenName }
    }

    async returnStudentIfExistsById(id: string) {
        const studentExists = await this.findById(id);
        if (!studentExists) {
            throw new NotFoundException(Errors.USER_NOT_FOUND);
        } else {
            return studentExists;
        }
    }
}
