import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { CompanyService } from 'src/company/company.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService, private readonly companyService: CompanyService) { }

  @Post('create')
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto.userEmail, createOrderDto.companyId, createOrderDto.serviceName, createOrderDto.desiredDate, createOrderDto.price);
  }

  @Get('all')
  findAll() {
    return this.ordersService.findAll();
  }

  @Get('findByCompanyId/:companyId')
  findByCompanyId(@Param('companyId') companyId: number) {
    return this.ordersService.findByCompanyId(companyId);
  }

  @Get('findByCompanyEmail/:email')
  async findByCompanyEmail(@Param('email') email: string) {
    let { id } = await this.companyService.findCompanyIdByEmail(email);
    return this.ordersService.findByCompanyId(id);
  }

  @Get('get/:id')
  findOne(@Param('id') orderId: number) {
    return this.ordersService.findById(orderId);
  }

  @Patch('complete/:id')
  complete(@Param('id') id: number) {
    return this.ordersService.complete(id);
  }

  @Patch('accept/:id')
  accept(@Param('id') id: number) {
    return this.ordersService.accept(id);
  }

  @Patch('cancel/:id')
  cancel(@Param('id') id: number) {
    return this.ordersService.cancel(id);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.ordersService.remove(+id);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.ordersService.findByEmail(email);
  }


}
