import { googleUsersConstants } from "./googleUsers.constants"
import googleUsersRepo from "./googleUsers.repo"
import { IGoogleUsers } from "./googleUsers.types";

const getOneUser = async(id:string)=>{
    try {
       return await googleUsersRepo.getOne(id);
    } catch (error) {
        throw googleUsersConstants.FAILED
    }
}

const addUser = async(userData:IGoogleUsers)=>{
    try {
        await googleUsersRepo.add(userData);
        return googleUsersConstants.USER_ADDED;
    } catch (error) {
        throw googleUsersConstants.FAILED
    }
}


export default{getOneUser,addUser}