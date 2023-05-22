import { Injectable } from '@nestjs/common';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewRepository } from './reviews.repository';
import { v4 as uuidv4 } from 'uuid';
import { OrdersRepository } from 'src/orders/orders.repository';

@Injectable()
export class ReviewsService {


  constructor(private readonly reviewRepository: ReviewRepository) { }


  create(orderId: string, companyId: string, name: string, rating: number, message: string) {


    return this.reviewRepository.create({
      reviewId: uuidv4(),
      companyId: companyId,
      orderId: orderId,
      name: name,
      rating: rating,
      message: message
    })
  }


  findByCompanyId(companyId: string) {
    return this.reviewRepository.findByCompanyId(companyId);
  }


  getAverage(companyId: string) {
    return this.reviewRepository.findAverageRatingByCompanyId(companyId);
  }

  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
