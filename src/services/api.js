import axios from "axios";
const API_Key = import.meta.env.VITE_API_KEY;


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
    headers: {

        Authorization: `Bearer ${API_Key}`,
    }
};
export const fetchTrendingMovies = async () => {
    const { data } = await axios.get(`trending/movie/day`, options);
    return data.results;

};

export const searchMovies = async (query, page = 1) => {
    const { data } = await axios.get(`search/movie?query=${query}&page=${page}`,
        options
    );
    return data;
};
export const fetchMoviesDetails = async (movieId) => {
    const { data } = await axios(`movie/${movieId}`, options);
    return data;
};

export const fetchMovieCast = async (movieId) => {
    const { data } = await axios(`movie/${movieId}/credits`, options);
    return data;
};

export const fetchMovieRewiews = async (movieId) => {
    const { data } = await axios(`movie/${movieId}/reviews`, options);
    return data;
};