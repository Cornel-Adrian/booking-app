import { Injectable } from '@nestjs/common';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from './schema/status.enum';
import { Order } from './entity/order.entity';

@Injectable()
export class OrdersService {


  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>) { }

  async create(userEmail: string, companyId: number, serviceName: string, desiredDate: string, price: number) {
    return this.ordersRepository.create({
      userEmail: userEmail,
      companyId: companyId,
      serviceName: serviceName,
      desiredDate: desiredDate,
      price: price
    });
  }

  findAll() {
    return this.ordersRepository.find({});
  }

  complete(id: number) {
    return this.ordersRepository.update({ id: id }, { status: Status.Done });
  }

  accept(id: number) {
    return this.ordersRepository.update({ id: id }, { status: Status.Pending });
  }

  cancel(id: number) {
    return this.ordersRepository.update({ id: id }, { status: Status.Canceled });
  }

  findByEmail(email: string) {
    return this.ordersRepository.findBy({
      userEmail: email,
    });
  }

  remove(id: number) {
    return this.ordersRepository.delete({ id: id })
  }

  findByCompanyId(companyId: number) {
    return this.ordersRepository.findBy({
      companyId: companyId,
    });
  }

  findById(orderId: number) {
    return this.ordersRepository.findBy({
      id: orderId,
    });
  }
}
