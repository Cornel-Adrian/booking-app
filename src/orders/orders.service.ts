import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './orders.repository';
import { v4 as uuidv4 } from 'uuid';
import { Status } from './schema/status.enum';

@Injectable()
export class OrdersService {


  constructor(private readonly ordersRepository: OrdersRepository) { }

  create(userEmail: string, companyId: string, serviceName: string, desiredDate: string, price: number) {
    return this.ordersRepository.create({
      orderId: uuidv4(),
      userEmail: userEmail,
      companyId: companyId,
      status: Status.New,
      serviceName: serviceName,
      desiredDate: desiredDate,
      price: price
    });
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
