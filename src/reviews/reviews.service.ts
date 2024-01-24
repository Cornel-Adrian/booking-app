import { Injectable } from '@nestjs/common';
import { Review } from './entities/review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {


  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>) { }


  create(orderId: number, companyId: number, name: string, rating: number, message: string) {


    return this.reviewRepository.create({
      orderId: orderId,
      companyId: companyId,
      name: name,
      rating: rating,
      message: message,
    })
  }


  findByCompanyId(companyId: number) {
    return this.reviewRepository.findOneBy({companyId: companyId});
  }


  getAverage(companyId: number) {
    return this.reviewRepository.average("rating", {companyId: companyId});
  }

}
