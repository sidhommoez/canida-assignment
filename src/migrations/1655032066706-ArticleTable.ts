import { Course } from 'src/domain/course.entity';
import { Professor } from 'src/domain/professor.entity';
import { Student } from 'src/domain/student.entity';
import { getRepository, MigrationInterface, QueryRunner } from "typeorm";

export class ArticleTable1655032066706 implements MigrationInterface {

 
    prof1: Professor = {
        id:'7104b456-c64b-4c0e-8e33-293d95d389b3',
        givenName: 'prof1',
        courses: []
    };
    prof2: Student = {
        id:'84774417-9508-469a-9d0c-9e8a5ec019d7',
        givenName: 'prof2',
        courses: []

    };
    prof3: Student = {
        id:'cf9534e1-6b28-449b-a367-e7d8b6d004fc',
        givenName: 'prof3',
        courses: []

    };
    prof4: Student = {
        id:'fbd5e540-261a-419a-b6d7-b40a0e52f1d8',
        givenName: 'prof4',
        courses: []
    };

    course1: Course = {
        givenName: 'course1',
        id:'fbd5e540-261a-419a-b6d7-b40a0e52f1d8',
        professor: this.prof1,
        students:[]
    }

    course2: Course = {
        givenName: 'course1',
        id:'fbd5e540-261a-419a-b6d7-b40a0e52f1d8',
        professor: this.prof2,
        students:[]
    }

    course3: Course = {
        givenName: 'course1',
        id:'fbd5e540-261a-419a-b6d7-b40a0e52f1d8',
        professor: this.prof3,
        students:[]
    }

    course4: Course = {
        givenName: 'course1',
        id:'fbd5e540-261a-419a-b6d7-b40a0e52f1d8',
        professor: this.prof4,
        students:[]
    } 

    user1: Student = {
        id:'7104b456-c64b-4c0e-8e33-293d95d389b3',
        givenName: 'user1',
        courses: [this.course1,this.course2]
    };

    user2: Student = {
        id:'84774417-9508-469a-9d0c-9e8a5ec019d7',
        givenName: 'user2',
        courses: [this.course3,this.course4]

    };
    
    user3: Student = {
        id:'cf9534e1-6b28-449b-a367-e7d8b6d004fc',
        givenName: 'user3',
        courses: [this.course1]

    };

    user4: Student = {
        id:'fbd5e540-261a-419a-b6d7-b40a0e52f1d8',
        givenName: 'user4',
        courses: [this.course4]
    };

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository('professor').save([this.prof1, this.prof2, this.prof3, this.prof4]);
        await getRepository('course').save([this.course1, this.course2, this.course3, this.course4]);
        await getRepository('student').save([this.user1, this.user2, this.user3, this.user4]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
