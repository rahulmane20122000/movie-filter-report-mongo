// import { DataTypes } from "sequelize";
// import { sequelize } from "../../utility/sequelize";

import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { IMovie } from "./movie.types";

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

const movieSchema = new BaseSchema({
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

type IMovieDocument = Document & IMovie;

export const movieModel = model<IMovieDocument>('movies',movieSchema);