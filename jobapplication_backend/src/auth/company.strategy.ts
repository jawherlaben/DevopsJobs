import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Company } from '../company/entities/company.entity';

@Injectable()
export class CompanyStrategy extends PassportStrategy(Strategy, 'company') {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'companyEmail', 
      passwordField: 'companyPassword',
    });
  }

  async validate(companyEmail: string, companyPassword: string): Promise<Partial<Company>> {
    const company = await this.authService.validateCompany(companyEmail, companyPassword);

    if (!company) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    return company;
  }
}
