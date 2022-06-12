import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { Course } from 'src/domain/course.entity';
import { BaseDTO } from './base.dto';
/**
 * An Student DTO object.
 */
export class StudentDTO extends BaseDTO {
    @ApiProperty()
    @IsString()
    givenName: string;

    @ApiProperty({
        isArray: true,
        description: 'Array of users',
        required: false,
    })
    @Type(() => Course)
    courses: Course[];
}
