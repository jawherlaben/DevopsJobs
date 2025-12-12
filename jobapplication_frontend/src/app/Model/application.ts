import { JobOffer } from "./job-offer";
import { User } from "./user";

export class Application {
  _id: string;
  job: JobOffer | string;
  user: User | string;
  cv: string;
  status?: ApplicationStatus;

  constructor(data: any) {
    this._id = data._id;
    this.job = data.job;
    this.user = data.user;
    this.cv = data.cv;
    this.status = data.status;
  }
}

export enum ApplicationStatus {
  ACCEPTED = 'accepted',
  DECLINED = 'declined',
  IN_PROCESS = 'in-process',
}
