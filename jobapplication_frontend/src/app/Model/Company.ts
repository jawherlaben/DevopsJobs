export class Company {
  _id: string;
  name: string;
  country: string;
  description: string;
  avatar: string;
  website: string;
  state: string;
  email:string;


  constructor(
    _id: string,
    name: string,
    country: string,
    description: string,
    avatar: string,
    website: string,
    state: string,
    email : string
  ) {
    this._id = _id;
    this.name = name;
    this.country = country;
    this.description = description;
    this.avatar = avatar;
    this.website = website;
    this.state = state;
    this.email=email;
  }
}
