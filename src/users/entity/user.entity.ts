import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: string;

    @Column()
    name: string;

    @Column({default:'user'})
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;


    constructor(user: Partial<User>){
        Object.assign(this, user);
    }
}