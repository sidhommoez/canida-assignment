import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfessorRepository } from 'src/repository/professor.repository';
import { Errors } from 'src/shared/Exceptions/enums/eng-errors.enum';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { ProfessorDTO } from './dto/professor.dto';
import { ProfessorMapper } from './mapper/professor.mapper';



@Injectable()
export class ProfessorService {
    constructor(@InjectRepository(ProfessorRepository) private professorRepository: ProfessorRepository) { }

    async findById(id: string): Promise<ProfessorDTO | undefined> {
        const result = await this.professorRepository.findOne(id);
        return ProfessorMapper.fromEntityToDTO(result);
    }

    async findByfields(options: FindOneOptions<ProfessorDTO>): Promise<ProfessorDTO | undefined> {
        const result = await this.professorRepository.findOne(options);
        return ProfessorMapper.fromEntityToDTO(result);
    }

    async find(options: FindManyOptions<ProfessorDTO>): Promise<ProfessorDTO | undefined> {
        const result = await this.professorRepository.findOne(options);
        return ProfessorMapper.fromEntityToDTO(result);
    }

    async getProfessorNameById(id: string): Promise<{ givenName: string; }> {
        const professor = await this.returnProfessorIfExistsById(id);
        return { givenName: professor.givenName }
    }

    async findAndCount(options: FindManyOptions<ProfessorDTO>): Promise<[ProfessorDTO[], number]> {
        const resultList = await this.professorRepository.findAndCount(options);
        const professorsDTO: ProfessorDTO[] = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(professor => professorsDTO.push(ProfessorMapper.fromEntityToDTO(professor)));
            resultList[0] = professorsDTO;
        }
        return resultList;
    }

    async returnProfessorIfExistsById(id: string) {
        const professorExists = await this.findById(id);
        if (!professorExists) {
            throw new NotFoundException(Errors.USER_NOT_FOUND);
        } else {
            return professorExists;
        }
    }
}
