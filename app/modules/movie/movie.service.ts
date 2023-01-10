import { movieConstants } from "./movie.constants";
import movieRepo from "./movie.repo";
import { IMovie } from "./movie.types";

const addMovie = async (movie: IMovie) => {
    try {
        await movieRepo.add(movie);
        return movieConstants.MOVIE_ADDED
    } catch (error) {
        throw movieConstants.FAILED
    }
}

const getAllMovies = async (limit?: any, page?: any, sortBy?: any, order?: any, searchValue?: any, field?: any) => {
    try {

        limit = Number(limit) || 10;
        page = Number(page) -1 || 0
        order = Number(order) || 1;
        const movies = await movieRepo.getAll(limit, page, sortBy, order, searchValue, field);
        const count = await movieRepo.getCount();
        return { count: movies.length, previousPage: page != 0, nextPage: page < Math.floor(count[0].count / limit), movies: movies }
    } catch (error) {
        throw movieConstants.FAILED
    }
}

const getReport = async (field: any, startDate: string, endDate: string) => {
    try {
        field = field || "gener";
        return await movieRepo.getReport(field, startDate, endDate);
    } catch (error) {
        throw movieConstants.FAILED
    }
}


export default { addMovie, getAllMovies, getReport }