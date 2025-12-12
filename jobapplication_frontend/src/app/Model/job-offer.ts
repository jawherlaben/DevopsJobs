export enum Skills {
    JAVASCRIPT = 'javascript',
    FRONTEND = 'frontend',
    REACTJS = 'reactjs',
    VUEJS = 'vuejs',
    ANGULARJS = 'angularjs',
    BACKEND = 'backend',
    EXPRESSJS = 'expressjs',
    NODEJS = 'nodejs',
    NESTJS = 'nestjs',
    TYPESCRIPT = 'typescript',
    DOCKER = 'docker',
    REDIS = 'redis',
    RABBITMQ = 'rabbitmq',
    GRPC = 'grpc',
    KUBERNETES = 'kubernetes',
    AWS = 'aws',
    GCP = 'gcp',
    AZURE = 'azure',
  }
  
  export enum JOB_TYPES {
    ON_SITE = 'ON_SITE',
    REMOTE = 'REMOTE',
    HYBRID = 'HYBRID',
  }
  export const REMUNERATION = ['UNPAID', 'PAID'];

  export class Job {
    title: string;
    description: string;
    body: string;
    pay: string;
    type: JOB_TYPES;
    tags: Skills[];
  
    constructor(
      title: string,
      description: string,
      body: string,
      pay: string,
      type: JOB_TYPES,
      tags: Skills[]
    ) {
      this.title = title;
      this.description = description;
      this.body = body;
      this.pay = pay;
      this.type = type;
      this.tags = tags;
    }
  }
  
export interface JobOffer {
  _id: string;
  title: string;
  description: string;
  body: string;
  pay?: string;
  type?: string;
  tags?: string[];
  applications: string[]; 
  chats?: string[]; 
  recruiter: string;
}