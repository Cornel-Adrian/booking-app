import { EntitySchema } from "typeorm";
import { Order } from "../entity/order.entity";

export const OrderSchema = new EntitySchema<Order>({
    name: "Order",
    target: Order,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        userEmail: {
            type: String,
        },
        companyId: {
            type: Number,
        },
        status: {
            type: String,
        },
        serviceName: {
            type: String,
        },
        desiredDate: {
            type: String,
        },
        price: {
            type: Number,
        },
    },
});