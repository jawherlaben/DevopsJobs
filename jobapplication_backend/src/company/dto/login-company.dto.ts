import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CompanyLoginDto {
    @IsEmail()
    @Transform(({ value }) => value.toLowerCase())
    companyEmail: string;

    @IsNotEmpty()
    companyPassword: string;
}
  