import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Company } from 'src/company/entity/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service, Company])],
  controllers: [ServicesController],
  providers: [ServicesService]
})
export class ServicesModule {}
