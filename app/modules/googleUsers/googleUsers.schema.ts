import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { IGoogleUsers } from "./googleUsers.types";

const googleUsersSchema = new BaseSchema({
    googleId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

type IGoogleUsersDocument = Document & IGoogleUsers

export const googleUsersModel = model<IGoogleUsersDocument>('googleUsers',googleUsersSchema);