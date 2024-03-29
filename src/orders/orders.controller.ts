import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
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
  findByCompanyId(@Param('companyId') companyId: string) {
    return this.ordersService.findByCompanyId(companyId);
  }

  @Get('findByCompanyEmail/:email')
  async findByCompanyEmail(@Param('email') email: string) {
    let { companyId } = await this.companyService.findCompanyIdByEmail(email);
    return this.ordersService.findByCompanyId(companyId);
  }

  @Get('get/:id')
  findOne(@Param('id') orderId: string) {
    return this.ordersService.findById(orderId);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Patch('complete/:id')
  complete(@Param('id') id: string) {
    return this.ordersService.complete(id);
  }

  @Patch('accept/:id')
  accept(@Param('id') id: string) {
    return this.ordersService.accept(id);
  }

  @Patch('cancel/:id')
  cancel(@Param('id') id: string) {
    return this.ordersService.cancel(id);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.ordersService.findByEmail(email);
  }


}
