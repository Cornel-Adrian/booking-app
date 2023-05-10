import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Order, OrderSchema} from './schema/order.schema';
import { OrdersRepository } from './orders.repository';

@Module({
  imports:[MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}])],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
  exports: [OrdersService]
})
export class OrdersModule {}
