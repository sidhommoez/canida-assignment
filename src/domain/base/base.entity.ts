import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
  
    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    createdDate?: Date;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    lastModifiedDate?: Date;
}
