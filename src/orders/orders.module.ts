import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { CompanyModule } from 'src/company/company.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderSchema } from './schema/order.schema';
import { CompanySchema } from 'src/company/schemas/company.schema';

@Module({
  imports: [TypeOrmModule.forFeature([OrderSchema, CompanySchema]), CompanyModule],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService]
})
export class OrdersModule { }
