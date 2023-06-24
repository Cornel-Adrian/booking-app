import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
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


  @Get('findByCompanyId/:companyId')
  findByCompanyId(@Param('companyId') companyId: string) {
    return this.reviewsService.findByCompanyId(companyId);
  }


  @Get('average/:companyId')
  getAverageByCompanyId(@Param('companyId') companyId: string) {
    return this.reviewsService.getAverage(companyId);
  }

}
