import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from './entities/company.entity';
import { Job, JobSchema } from 'src/job/entities/job.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
    MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])
  ],

  exports:[CompanyService],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}
