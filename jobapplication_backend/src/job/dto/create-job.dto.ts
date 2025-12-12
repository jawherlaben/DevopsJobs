
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from '@nestjs/class-validator'
import { JOB_TYPES , REMUNERATION, SKILLS} from 'src/utils/constants'
import { JobTypeLowerCase , Skill } from 'src/utils/types'

export class CreateJobDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  body: string

  @IsOptional()
  @IsEnum(REMUNERATION.map(type => type.toLowerCase()))
  pay: string

  @IsOptional()
  @IsEnum(JOB_TYPES.map(type => type.toLowerCase()))
  type: JobTypeLowerCase

  @IsNotEmpty()
  @IsString()
  recruiter: string

  @IsOptional()
  @IsArray()
  @IsEnum(SKILLS, { each: true })
  tags: Skill[]

}