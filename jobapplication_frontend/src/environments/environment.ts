export class pathconst {
  public static readonly COMPANY_ENDPOINT_PATH = 'company';
  public static readonly USER_ENDPOINT_PATH = 'user';
  public static readonly AUTH_ENDPOINT_PATH = 'auth';
  public static readonly JOB_ENDPOINT_PATH = 'job';
  public static readonly APPLICATION_ENDPOINT_PATH = 'application';
}

export class classpathoperations {
  public static readonly FIND_COMPANY_BY_ID = 'findcompanybyid';
  public static readonly FIND_COMPANY_BY_EMAIL = 'findcompanybyemail';
  public static readonly FIND_USER_BY_ID = 'findUserbyId';
  public static readonly CHANGE_USERPWD_BY_ID = 'changePassword';
}

export class environment { 
  public static  production: false;
  public static readonly apiUrl = 'http://localhost:3000' 
};