import { EntitySchema } from "typeorm";
import { Company } from "../entity/company.entity";

export const CompanySchema = new EntitySchema<Company>({
    name: "Company",
    target: Company,
    columns: {
        id:{
            type:Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        description: {
            type: String,
        },
    },
});