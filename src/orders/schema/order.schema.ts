import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'
import { Status } from "./status.enum";


export type OrderDocument = Order & Document;

@Schema()
export class Order {

    @Prop()
    orderId: string;
    @Prop()
    userId: string;
    @Prop()
    companyId: string;
    @Prop()
    status: Status[];
    @Prop()
    serviceName: string;
    @Prop()
    desiredDate: string; 
    @Prop()
    price: number; 
}



export const OrderSchema = SchemaFactory.createForClass(Order);