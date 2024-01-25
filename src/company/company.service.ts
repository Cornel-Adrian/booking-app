import { Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Company } from './entity/company.entity';


class Service {
  name: string;
  description: string;
  price: number;
}

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,) { }

  async create(name: string, email: string, description: string): Promise<Company> {
    return this.companyRepository.create({
      name: name,
      email: email,
      description: description,
    }
    );
  }

  findAll() {
    return this.companyRepository.find({});
  }


  findAllBasic() {
    return this.companyRepository.find({ select: { id: true, name: true, description: true } });
  }

  findByDescription(description: string) {
    return this.companyRepository.findBy({
      description: Like("%" + description + "%"),
    });
  }

  findOne(companyId: number) {
    return this.companyRepository.findOne({
      where: {
        id: companyId
      }
    });
  }

  findCompanyIdByEmail(email: string) {
    return this.companyRepository.findOneBy({ email: email });
  }
}
