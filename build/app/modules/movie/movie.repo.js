"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie_constants_1 = require("./movie.constants");
const movie_schema_1 = require("./movie.schema");
const add = (movie) => movie_schema_1.movieModel.create(Object.assign({}, movie));
const getCount = () => movie_schema_1.movieModel.aggregate([
    { $group: { _id: null, count: { $sum: 1 } } },
    { $project: { _id: 0 } }
]);
const getAll = (limit, page, sortBy, orderBy, searchValue, field) => movie_schema_1.movieModel.aggregate([
    { $match: { [field || movie_constants_1.movieConstants.DEFAULT_FIELD]: { $regex: searchValue || "", $options: "i" } } },
    { $skip: page * limit },
    { $limit: limit },
    { $sort: { [sortBy]: orderBy } },
]);
const getReport = (field, startDate, endDate) => movie_schema_1.movieModel.aggregate([
    { $match: { $and: [{ releaseDate: { $gte: startDate || movie_constants_1.movieConstants.DEFAULT_STARTDATE } }, { releaseDate: { $lte: endDate || movie_constants_1.movieConstants.DEFAULT_ENDdATE } }] } },
    { $group: { _id: `$${field}`, count: { $sum: 1 } } }
]);
exports.default = { add, getAll, getReport, getCount };
//# sourceMappingURL=movie.repo.js.map