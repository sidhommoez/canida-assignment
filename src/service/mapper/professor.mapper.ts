import { Professor } from 'src/domain/professor.entity';
import { ProfessorDTO } from '../dto/professor.dto';

/**
 * An Professor mapper object.
 */
export class ProfessorMapper {
    static fromDTOtoEntity(professorDTO: ProfessorDTO): Professor {
        if (!professorDTO) {
            return;
        }
        const professor = new Professor();
        const fields = Object.getOwnPropertyNames(professorDTO);
        fields.forEach(field => {
            professor[field] = professorDTO[field];
        });
        return professor;
    }

    static fromEntityToDTO(professor: Professor): ProfessorDTO {
        if (!professor) {
            return;
        }
        const professorDTO = new ProfessorDTO();

        const fields = Object.getOwnPropertyNames(professor);

        fields.forEach(field => {
            professorDTO[field] = professor[field];
        });

        return professorDTO;
    }
}
