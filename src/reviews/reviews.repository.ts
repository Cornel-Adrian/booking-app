import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Review, ReviewDocument } from "./schema/review.schema"
import { Model, FilterQuery } from 'mongoose'


@Injectable()
export class ReviewRepository {
    constructor(@InjectModel(Review.name) private reviewModel: Model<ReviewDocument>) { }


    async findByCompanyId(companyId: string): Promise<Review[]> {
        const query = { 'companyId': companyId }
        return this.reviewModel.find(query);
    }


    async findByOrderId(orderId: string): Promise<Review[]> {
        const query = { 'orderId': orderId }
        return this.reviewModel.find(query);
    }

    async create(review: Review): Promise<Review> {
        const newReview = new this.reviewModel(review);
        return newReview.save();
    }


    async findAverageRatingByCompanyId(companyId: string): Promise<number> {
        const result = await this.reviewModel.aggregate([
          { $match: { companyId: companyId } },
          { $group: { _id: null, averageRating: { $avg: '$rating' } } },
        ]);
        console.log(result);
        const average = result[0]?.averageRating || 0;
        return average;
      }


}