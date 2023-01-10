import { userModel } from "./user.schema";
import { IUser } from "./user.types";

const add = (userDetails: IUser) => userModel.create({ ...userDetails });

const getOne = (field: object) => userModel.findOne({...field});

const updateOne = (id: string, updatedUserDetails: object) => userModel.updateOne({_id:id},updatedUserDetails);





export default { add, updateOne, getOne }

