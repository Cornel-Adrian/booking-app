import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'


export type ReviewDocument = Review & Document;


@Schema()
export class Review {
    @Prop()
    reviewId: string;

    @Prop()
    companyId: string;


    @Prop()
    orderId: string;

    @Prop()
    name: string;

    @Prop()
    rating: number;

    @Prop()
    message: string;
}


export const ReviewSchema = SchemaFactory.createForClass(Review);