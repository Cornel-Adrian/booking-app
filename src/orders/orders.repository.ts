import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Order, OrderDocument } from "./schema/order.schema";
import { Model, FilterQuery } from 'mongoose'
import { Status } from "./schema/status.enum";

@Injectable()
export class OrdersRepository {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

    async findOne(orderFilterQuery: FilterQuery<Order>): Promise<Order> {
        return this.orderModel.findOne(orderFilterQuery);
    }

    async find(ordersFilterQuery: FilterQuery<Order>): Promise<Order[]> {
        return this.orderModel.find(ordersFilterQuery);
    }


    async findById(orderId: string): Promise<Order[]> {
        const query = { 'orderId': orderId }
        return this.orderModel.find(query);
    }

    async findByUserEmail(email: string): Promise<Order[]> {
        const query = { 'userEmail': email }
        return this.orderModel.find(query);
    }

    async findByCompanyId(companyId: string): Promise<Order[]> {
        const query = { 'companyId': companyId }
        return this.orderModel.find(query);
    }


    async create(order: Order): Promise<Order> {
        const newOrder = new this.orderModel(order);
        return newOrder.save();
    }


    async findOneAndUpdate(orderFilterQuery: FilterQuery<Order>, order: Partial<Order>): Promise<Order> {
        return this.orderModel.findOneAndUpdate(orderFilterQuery, order);

    }


    async accept(id: string): Promise<Order> {
        const query = { 'orderId': id }
        return this.orderModel.findOneAndUpdate(query, { $set: { 'status': Status.Pending } });

    }

    async complete(id: string): Promise<Order> {
        const query = { 'orderId': id }
        return this.orderModel.findOneAndUpdate(query, { $set: { 'status': Status.Done } });
    }

    async cancel(id: string): Promise<Order> {
        const query = { 'orderId': id }
        return this.orderModel.findOneAndUpdate(query, { $set: { 'status': Status.Canceled } });
    }

}