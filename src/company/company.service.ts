import { Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyRepository } from './company.repository'
import { v4 as uuidv4 } from 'uuid';
import { Company } from './schemas/company.schema';


class Service {
  name: string;
  description: string;
  price: number;
}

@Injectable()
export class CompanyService {

  constructor(private readonly companyRepository: CompanyRepository) { }

  create(name: string, email: string, description: string, services: Service[]): Promise<Company> {
    return this.companyRepository.create({
      companyId: uuidv4(),
      name: name,
      email: email,
      description: description,
      services: services
    }
    );
  }

  findAll() {
    return this.companyRepository.find({});
  }

  findOne(companyId: string) {
    return this.companyRepository.findOne({ "companyId": companyId });
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
