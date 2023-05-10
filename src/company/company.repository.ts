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

    async findByDescription(description: string): Promise<Company[]> {
        const query = { 'description': { $regex: description, $options: 'i' } }
        const results = await this.companyModel.find(query).exec();
        return results;
    }

    async findById(companiesFilterQuery: FilterQuery<Company>): Promise<Company[]> {
        return this.companyModel.findById(companiesFilterQuery);
    }

    async create(company: Company): Promise<Company> {
        const newCompany = new this.companyModel(company);
        return newCompany.save();
    }


    async findOneAndUpdate(companyFilterQuery: FilterQuery<Company>, company: Partial<Company>): Promise<Company> {
        return this.companyModel.findOneAndUpdate(companyFilterQuery, company);

    }

    async findBasic(): Promise<Company[]> {
        return await this.companyModel.find().select('companyId name description').exec();
    }


}