import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from 'src/services/entities/service.entity';
import { Company } from './entity/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company, Service])],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService]
})
export class CompanyModule { }
