import { Course } from 'src/domain/course.entity';
import { CourseDTO } from '../dto/course.dto';

/**
 * An Course mapper object.
 */
export class CourseMapper {
    static fromDTOtoEntity(courseDTO: CourseDTO): Course {
        if (!courseDTO) {
            return;
        }
        const course = new Course();
        const fields = Object.getOwnPropertyNames(courseDTO);
        fields.forEach(field => {
            course[field] = courseDTO[field];
        });
        return course;
    }

    static fromEntityToDTO(course: Course): CourseDTO {
        if (!course) {
            return;
        }
        const courseDTO = new CourseDTO();

        const fields = Object.getOwnPropertyNames(course);

        fields.forEach(field => {
            courseDTO[field] = course[field];
        });

        return courseDTO;
    }
}
