import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  
  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get('findcompanybyemail/:email')
  findByEmail(@Param('email') email: string){
    return this.companyService.findOneByEmail(email);
  }

  @Get('findcompanyById/:id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Get('findcompanybyname/:name')
  findByName(@Param('name') name: string){
    return this.companyService.findOneByName(name);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(id);
  }
}
