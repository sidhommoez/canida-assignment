import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Course } from './course.entity';

@Entity('professor')
export class Professor extends BaseEntity {
    @Column({ nullable: true, unique: true })
    givenName: string;

    @OneToMany(() => Course, c => c.professor)
    courses: Course[];
}
