"use strict";
// import { DataTypes } from "sequelize";
// import { sequelize } from "../../utility/sequelize";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
// export const movieModel = sequelize.define('movies', {
// title: {
//     type: DataTypes.STRING,
//            required: true,
//     unique: true
// },
// imdb: {
//     type: DataTypes.DECIMAL(10, 1),
//     allowNull: false,
//     validate: {
//         min: 0,
//         max: 10
//     }
// },
// gener: {
//     type: DataTypes.STRING,
//     allowNull: false,
// },
// releaseDate: {
//     type: DataTypes.DATEONLY,
// },
// productionName: {
//     type: DataTypes.STRING,
//     allowNull: false
// },
// country:{
//     type:DataTypes.STRING,
//     allowNull:false
// }
// });
const movieSchema = new base_schema_1.BaseSchema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    imdb: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    gener: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
    },
    productionName: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
});
exports.movieModel = (0, mongoose_1.model)('movies', movieSchema);
//# sourceMappingURL=movie.schema.js.map