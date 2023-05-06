import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

class Service {

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

}


@Schema()
export class Company {

    @Prop()
    companyId: string;
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop()
    description: string;
    @Prop()
    services: Service[];

}


export const CompanySchema = SchemaFactory.createForClass(Company);