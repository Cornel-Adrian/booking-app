import { Injectable } from '@nestjs/common';
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
    return this.ordersRepository.find({});
  }

  complete(id: string) {
    return this.ordersRepository.complete(id);
  }

  accept(id: string) {
    return this.ordersRepository.accept(id);
  }

  cancel(id: string) {
    return this.ordersRepository.cancel(id);
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  findByEmail(email: string) {
    return this.ordersRepository.findByUserEmail(email);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }

  findByCompanyId(companyId: string){
    return this.ordersRepository.findByCompanyId(companyId);
  }

  findById(orderId: string) {
    return this.ordersRepository.findById(orderId);
  }
}
