import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Course } from './course.entity';

@Entity('student')
export class Student extends BaseEntity {
    @Column({ nullable: true, unique: true })
    givenName: string;

    @ManyToMany(() => Course, (c) => c.students)
    @JoinTable()
    courses: Course[];
}
