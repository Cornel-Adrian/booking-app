import { Injectable } from '@nestjs/common';
import { ReviewRepository } from './reviews.repository';
import { v4 as uuidv4 } from 'uuid';

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

}
