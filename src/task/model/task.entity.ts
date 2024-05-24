import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'task'})
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', length: 100, nullable: false })
    title: string;
  
    @Column({ type: 'varchar', length: 200, nullable: false })
    status: string;

    @Column({ type: 'varchar', length: 300 })
    description: string;
}
