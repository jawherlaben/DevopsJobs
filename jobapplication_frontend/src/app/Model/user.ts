export interface User {
    _id: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    password: string;
    dateBirth?: string;
    appliedJobs?: string[];
    gender: string;
    address?: string;
    profileImage?: string;
    role: string;
    date_added: Date;
    description?: string;
    education?: Education[];
    experience?: Experience[];
    skills?: string[];
  }

  export interface Experience {
    title: string;
    period: {
      startDate: Date;
      endDate: Date;
    };
    description: string;
  }

  export interface Education {
    title: string;
    period: {
      startDate: Date;
      endDate: Date;
    };
    description: string;
  }
