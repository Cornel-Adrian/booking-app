import { Service } from "src/services/entities/service.entity";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userEmail: string;

    @Column()
    companyId: number;

    @Column()
    status: string;

    @Column()
    serviceName: string;

    @Column()
    desiredDate: string;

    @Column()
    price: number;

}