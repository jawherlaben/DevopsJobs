import { Module } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationController } from './application.controller';
import { application } from 'express';
import { Application, ApplicationSchema } from './entities/application.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from 'src/company/entities/company.entity';
import { Job, JobSchema } from 'src/job/entities/job.entity';
import { HttpModule } from '@nestjs/axios';
import { JobModule } from 'src/job/job.module';
import { UserModule } from 'src/user/user.module';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [CompanyModule,HttpModule
    ,JobModule,
    UserModule,
    MongooseModule.forFeature([{ name: Application.name, schema: ApplicationSchema }]),
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
    MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])


  ],
  controllers: [ApplicationController],
  providers: [ApplicationService],
  exports:[ApplicationService]
})
export class ApplicationModule {}
