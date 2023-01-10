import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import {IUser} from './user.types'

const userSchema = new BaseSchema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});

type IUserDocument = Document & IUser

export const userModel = model<IUserDocument>('users',userSchema);






