import { Service } from "src/services/entities/service.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    description: string;

    @ManyToMany(() => Service, (service) => service.companyId, { cascade: true })
    services: Service[]

}