import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class AbstractEntity<T> {


    @CreateDateColumn()
    CreatedAt: Date;


    @UpdateDateColumn()
    UpdatedAt: Date;

    constructor(entity: Partial<T>) {
        Object.assign(this, entity);
    }

}