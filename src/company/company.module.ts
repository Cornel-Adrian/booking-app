import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { CompanySchema } from './schemas/company.schema'
import { CompanyRepository } from './company.repository'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CompanySchema])],
  controllers: [CompanyController],
  providers: [CompanyService, CompanyRepository],
  exports: [CompanyService]
})
export class CompanyModule { }
