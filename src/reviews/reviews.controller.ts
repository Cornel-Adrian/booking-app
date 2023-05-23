import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { OrdersService } from 'src/orders/orders.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService, private readonly ordersService: OrdersService) { }

  @Post('create')
  async create(@Body() createReviewDto: CreateReviewDto) {

    let order = await this.ordersService.findById(createReviewDto.orderId);
    let companyId = order[0]['companyId'];

    return this.reviewsService.create(createReviewDto.orderId, companyId, createReviewDto.name, createReviewDto.rating, createReviewDto.message);
  }

  @Get()
  findAll() {
    return this.reviewsService.findAll();
  }

  @Get('findByCompanyId/:companyId')
  findByCompanyId(@Param('companyId') companyId: string) {
    return this.reviewsService.findByCompanyId(companyId);
  }


  @Get('average/:companyId')
  getAverageByCompanyId(@Param('companyId') companyId: string) {
    return this.reviewsService.getAverage(companyId);
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(+id, updateReviewDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(+id);
  }
}
