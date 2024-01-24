    // @Prop()
    // reviewId: string;

import { EntitySchema } from "typeorm";
import { Review } from "../entities/review.entity";


export const ReviewSchema = new EntitySchema<Review> ({
    name: "Review",
    target: Review,
    columns:{
        id: {
            primary: true,
            type: Number,
            generated: true,
        },
        companyId: {
            type: Number,
        },
        orderId: {
            type: Number,
        },
        name: {
            type: String,
        },
        rating: {
            type: Number,
        },
        message: {
            type: String,
        },
    }
})