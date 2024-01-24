import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyId: number;

    @Column()
    orderId: number;

    @Column()
    name: string;

    @Column()
    rating: number;

    @Column()
    message: string;
}
