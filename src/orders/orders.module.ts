import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersRepository } from './orders.repository';
import { CompanyModule } from 'src/company/company.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), CompanyModule],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
  exports: [OrdersService]
})
export class OrdersModule { }
