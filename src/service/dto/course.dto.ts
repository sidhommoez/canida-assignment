import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { Professor } from 'src/domain/professor.entity';
import { Student } from 'src/domain/student.entity';
import { BaseDTO } from './base.dto';
/**
 * An Course DTO object.
 */
export class CourseDTO extends BaseDTO {
    @ApiProperty()
    @IsString()
    givenName: string;

    @ApiProperty({description: 'Professor', required: true })
    @Type(() => Professor)
    professor: Professor

    @ApiProperty({
        isArray: true,
        description: 'Array of users',
        required: false,
    })
    @Type(() => Student)
    students: Student[];
}
