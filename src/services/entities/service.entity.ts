import { Company } from "src/company/entity/company.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @ManyToMany(() => Company, (company) => company.id, { cascade: true })
    @Column()
    companyId: number;

}