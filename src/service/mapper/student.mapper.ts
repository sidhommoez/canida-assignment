import { Student } from 'src/domain/student.entity';
import { StudentDTO } from '../dto/student.dto';

/**
 * An Student mapper object.
 */
export class StudentMapper {
    static fromDTOtoEntity(studentDTO: StudentDTO): Student {
        if (!studentDTO) {
            return;
        }
        const student = new Student();
        const fields = Object.getOwnPropertyNames(studentDTO);
        fields.forEach(field => {
            student[field] = studentDTO[field];
        });
        return student;
    }

    static fromEntityToDTO(student: Student): StudentDTO {
        if (!student) {
            return;
        }
        const studentDTO = new StudentDTO();

        const fields = Object.getOwnPropertyNames(student);

        fields.forEach(field => {
            studentDTO[field] = student[field];
        });

        return studentDTO;
    }
}
