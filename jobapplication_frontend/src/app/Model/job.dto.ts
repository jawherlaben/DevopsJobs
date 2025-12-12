
import { Skills, JOB_TYPES } from './job-offer';

export interface JobDto {
  title: string;
  description: string;
  body: string;
  pay: string;
  type: JOB_TYPES;
  recruiter: String ;
  tags: Skills[];
}
