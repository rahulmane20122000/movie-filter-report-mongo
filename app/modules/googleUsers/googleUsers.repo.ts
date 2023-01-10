import { googleUsersModel } from "./googleUsers.schema";
import { IGoogleUsers } from "./googleUsers.types";

const getOne = (id:string)=> googleUsersModel.findOne({googleId:id});

const add = (userData:IGoogleUsers)=> googleUsersModel.create({...userData});

export default {getOne,add}