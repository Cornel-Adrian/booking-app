import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Company, CompanyDocument } from "./schemas/company.schema";
import { Model, FilterQuery } from 'mongoose';

@Injectable()
export class CompanyRepository {
    constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) { }


    async findOne(companyFilterQuery: FilterQuery<Company>): Promise<Company> {
        return this.companyModel.findOne(companyFilterQuery);
    }

    async find(usersFilterQuery: FilterQuery<Company>): Promise<Company[]> {
        return this.companyModel.find(usersFilterQuery);
    }

    async findById(usersFilterQuery: FilterQuery<Company>): Promise<Company[]> {
        return this.companyModel.findById(usersFilterQuery);
    }

    async create(company: Company): Promise<Company> {
        const newCompany = new this.companyModel(company);
        return newCompany.save();
    }


    async findOneAndUpdate(companyFilterQuery: FilterQuery<Company>, company: Partial<Company>): Promise<Company> {
        return this.companyModel.findOneAndUpdate(companyFilterQuery, company);

    }


}