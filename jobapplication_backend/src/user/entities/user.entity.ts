
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {HydratedDocument } from 'mongoose';
import { Application} from 'src/application/entities/application.entity';
import { Gender } from 'src/utils/types';
import { GENDERS, ROLES } from 'src/utils/constants';

type experienceAndEducationElement = {
    title: string;
    period: {
      startDate: Date;
      endDate: Date;
    };
    description: string;
  };
  
export type UserDocument = HydratedDocument<User>;

@Schema()
export  class User {
    _id; 
    
    @Prop({
        required: true
    })
    firstname: string;

    @Prop({
        required: true
    })
    lastname: string;

    @Prop({
        required: false
    })
    description: string;

    @Prop({
        required: true
    })
    phoneNumber: string;

    @Prop({
        required: true
    })
    email:string;

    @Prop({
        required: true
    })
    password: string;

    @Prop()
    dateBirth: string;

    @Prop({ 
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }]
    })
      appliedJobs: Application[];

    @Prop({ default: GENDERS[0], type: String })
    gender: Gender;

    @Prop()
    address: string;

    @Prop({
        default: [],
    })
    skills: [string];

    @Prop(
        {
            default: [],
            type: [Object]
        }
    )
    education: experienceAndEducationElement[];

    @Prop(
        {
            default: [],
            type: [Object]
        }
    )
    experience: experienceAndEducationElement[];

    @Prop()
    profileImage: string;

    @Prop({ default: ROLES[0], type: String})
    role: string;

    @Prop({ default: Date.now })
    date_added: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);


