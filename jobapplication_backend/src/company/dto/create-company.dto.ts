import { IsEmail, IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator'
import { Transform } from 'class-transformer'

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  website: string

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  state: string

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  country: string
}