import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, Types } from 'mongoose'
import { Job } from 'src/job/entities/job.entity'
export type CompanyDocument = Company & Document

@Schema()
export class Company  {
 _id;
    
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  description: string

  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ default: null })
  avatar?: string

  @Prop({ default: null })
  website: string

  @Prop()
  role: string;

  @Prop({ required: true })
  state: string

  @Prop({ required: true })
  country: string

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }]
  })
  postings: Job[]; 

  @Prop({ default: [] })
  hired?: []
}

const CompanySchema = SchemaFactory.createForClass(Company)



export { CompanySchema }