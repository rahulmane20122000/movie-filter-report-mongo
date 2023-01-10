import { movieConstants } from "./movie.constants";
import { movieModel } from "./movie.schema";
import { IMovie } from "./movie.types";



const add = (movie: IMovie) => movieModel.create({ ...movie });

const getCount = () => movieModel.aggregate([
    { $group: { _id: null, count: { $sum: 1 } } },
    { $project: { _id: 0 } }
]);


const getAll = (limit: number, page: number, sortBy: string, orderBy: any, searchValue: string, field: string) => movieModel.aggregate([
    
    { $skip: page * limit },
    { $limit: limit },
    { $match: { [field || movieConstants.DEFAULT_FIELD]: { $regex: searchValue || "", $options: "i" } } },
    { $sort: { [sortBy]: orderBy } },

]);

const getReport = (field: string, startDate: string, endDate: string) => movieModel.aggregate([
    { $match: { $and: [{ releaseDate: { $gte: startDate || movieConstants.DEFAULT_STARTDATE } }, { releaseDate: { $lte: endDate || movieConstants.DEFAULT_ENDdATE } }] } },
    { $group: { _id: `$${field}`, count: { $sum: 1 } } }
]);

export default { add, getAll, getReport, getCount }

