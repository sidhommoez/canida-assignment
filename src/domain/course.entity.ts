import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Professor } from './professor.entity';
import { Student } from './student.entity';

@Entity('course')
export class Course extends BaseEntity {
    @Column({ nullable: true })
    givenName: string;

    @ManyToOne(() => Professor, p => p.courses)
    professor: Professor;

    @ManyToMany(() => Student, (q) => q.courses)
    students: Student[];
}
