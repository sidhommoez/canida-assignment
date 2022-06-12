import { Professor } from 'src/domain/professor.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Professor)
export class ProfessorRepository extends Repository<Professor> {}
