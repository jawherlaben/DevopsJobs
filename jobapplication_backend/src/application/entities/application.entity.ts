import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, HydratedDocument, Types } from 'mongoose'
import { Job } from 'src/job/entities/job.entity'
import { User } from 'src/user/entities/user.entity'
import { ApplicationStatus } from 'src/utils/types'
import { APPLICATION_STATUSES } from 'src/utils/constants'

export type ApplicationDocument = HydratedDocument<Application>

@Schema()
export class Application {
  
    _id ; 
    
    @Prop({ type: [{ type: 'ObjectId', ref: 'Job' }] })
    job: Job;
  

    @Prop({ type: 'ObjectId', ref: 'User' }) // Add the correct type for the user field
    user: User;

  @Prop({ required: true })
  cv: string

  @Prop({ default: APPLICATION_STATUSES.IN_PROCESS, type: String })
  status?: ApplicationStatus
}

export const ApplicationSchema = SchemaFactory.createForClass(Application)