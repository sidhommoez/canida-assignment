import { Student } from 'src/domain/student.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {}
