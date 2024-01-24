import { EntitySchema } from "typeorm";
import { User } from "../entity/user.entity";

export const UserSchema = new EntitySchema<User>({

    name: 'User',
    target: User,
    columns: {
        userId: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        }
    }
})