import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) { }

  @Post('create')
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto.name, createCompanyDto.email, createCompanyDto.description, createCompanyDto.services);
  }


  @UseGuards(JwtAuthGuard)
  @Get('/all')
  findAll() {
    return this.companyService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/all/basic')
  FindBasic() {
    return this.companyService.findAllBasic();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/find/:description')
  findByDescription(@Param('description') description: string) {
    return this.companyService.findByDescription(description);
  }


  @UseGuards(JwtAuthGuard)
  @Get('/findCompanyId/:email')
  findCompanyIdByEmail(@Param('email') email: string) {
    return this.companyService.findCompanyIdByEmail(email);
  }


  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}
