import { Injectable, UploadedFile } from '@nestjs/common';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Application, ApplicationDocument } from './entities/application.entity';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { HttpService } from "@nestjs/axios";
import { JobService } from 'src/job/job.service';
import { Job, JobDocument } from 'src/job/entities/job.entity';
import { UserDocument } from 'src/user/entities/user.entity';
import { stringify } from 'flatted';
import { UpdateJobDto } from 'src/job/dto/update-job.dto';

@Injectable()
export class ApplicationService {
  constructor(@InjectModel(Job.name) private jobRepository: Model<JobDocument>,
  @InjectModel(Application.name) private applicationModel: Model<ApplicationDocument>,
  private httpService: HttpService,
  private readonly us : UserService,
  private readonly js : JobService,
  ){}


  async apply(jobId: string, userId:string , @UploadedFile() cvfile: Express.Multer.File) {

    // Find the job by its id
    const job = await this.js.findOne(jobId);
    // Find the user by its id
    const user = await this.us.findUserbyId(userId);
    // Create the application
    const applicationData: Partial<Application> = {
      job: job,
      user: user,
      cv: cvfile.filename,};
    
    const application = new this.applicationModel(applicationData);
    const savedApplication = await application.save();
    // Update the job with the new application details
    job.applications.push(savedApplication);
    await this.js.update(job._id, { applications : job.applications} as UpdateJobDto );
    
    //Update the applied job to the user
    user.appliedJobs.push(savedApplication);
    await this.us.update(user.email, { appliedJobs : user.appliedJobs} as UserDocument );
    
    return this.parseCircularJson(savedApplication);
     // Serialize the object excluding circular references
  }

  private parseCircularJson(obj: any): any {
    return JSON.parse(stringify(obj));
  }
   
   async findall(): Promise<Application[]>{
    return await this.applicationModel.find();
  }

  async findCompanyByApplicationId(id : string){
    const application =  await this.findOne(id);
    const company =  application.job;
    return company;

  }
 

  async findOne(id: string) {
    return await this.applicationModel.findById(id);
  }

  update(id: string, updateApplicationDto: UpdateApplicationDto) {
    return `This action updates a #${id} application`;
  }

  remove(id: string) {
    return `This action removes a #${id} application`;
  }

  async findappliedJobs(userId: string) {
    const user = await this.us.findUserbyId(userId);
    const appliedJobs = user.appliedJobs;
    return appliedJobs;
  }
  
}
