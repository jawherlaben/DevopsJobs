import { Controller, Request,Get , Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UserLoginDto } from './user/dto/login-company.dto';
import { CompanyLoginDto } from './company/dto/login-company.dto';
import { CreateCompanyDto } from './company/dto/create-company.dto';
import { CreateUserDto } from './user/dto/create-user.dto';

require('dotenv').config(); 

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('auth/login')
  async loginUser(@Body() body: UserLoginDto) {
    return this.authService.userLogin(body);
  }

  @Post('auth/company-login')
  async loginCompany(@Body() body: CompanyLoginDto) {
    return this.authService.companyLogin(body);
  }

  @Post('auth/register')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.authService.userRegister(createUserDto);
  }

  @Post('auth/company-register')
  async registerCompany(@Body() body: CreateCompanyDto) {
    return this.authService.companyRegister(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    
    return req.user;
  }
}