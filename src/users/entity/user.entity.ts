import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import {AbstractEntity } from '../../defaults/abstract.entity'


@Entity()
export class User extends AbstractEntity<User> {
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
}