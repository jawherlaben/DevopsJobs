import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, HydratedDocument, Types } from 'mongoose'
import { Application } from 'src/application/entities/application.entity';
import { Company } from 'src/company/entities/company.entity';
import { JOB_TYPES, REMUNERATION } from 'src/utils/constants';
import { JobTypeLowerCase, Skill } from 'src/utils/types';



export type JobDocument = Job & Document;
@Schema()
export class Job {

   _id;

  @Prop({ 
    type: Types.ObjectId, ref: 'Company' 
})
  recruiter: Company;

  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  description: string

  @Prop({ required: true })
  body: string

  @Prop({ default: REMUNERATION[0], type: REMUNERATION })
  pay?: string

  @Prop({ default: JOB_TYPES[0], type: JOB_TYPES })
  type?: JobTypeLowerCase

  @Prop({ default: [] })
  tags?: Skill[]

  @Prop({  type: [{ type: Types.ObjectId, ref: 'Application' }]
  })
  applications: Application[];

  @Prop({ default: [], ref: 'Chat' })
  chats?: []
}

export const JobSchema = SchemaFactory.createForClass(Job);