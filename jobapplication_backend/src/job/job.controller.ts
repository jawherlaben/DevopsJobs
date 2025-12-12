import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobService.create(createJobDto);
  }

  @Get()
  findAll() {
    return this.jobService.findAll();
  }

  @Get('findjobbyid/:id')
  findOne(@Param('id') id: string) {
    return this.jobService.findOne(id);
  }

  @Get('getcompanybyjobid/:id')
  findCompany(@Param('id') id : string){
    return this.jobService.getcompanyIdbyJobId(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
    return this.jobService.update(id, updateJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobService.remove(id);
  }
}
