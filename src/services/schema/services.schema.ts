import { EntitySchema } from "typeorm";
import { Service } from "../entities/service.entity";

export const ServicesSchema = new EntitySchema<Service>({
    name: 'Services',
    target: Service,
    columns: {
        id:{
            type: Number,
            generated: true,
            primary: true,
        },
        name:{
            type: String,
        },
        description:{
            type: String,
        },
        price:{
            type: Number,
        },
        companyId:{
            type: Number,
        },

    }

})