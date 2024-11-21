import axios from "axios";
const API_Key = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`;

const options = {
    headers: {

        Authorization: `Bearer ${API_Key}`,
    }
};
export const FetchTrendingMovies = async () => {
    const url = `${BASE_URL}/trending/movie/day?language=en-US}`;
    const { data } = await axios.get(url, options);
    return data.results;
};
export const searchMovies = async (query) => {
    const url = `${BASE_URL}/saerch/movie?query=${query}&language=en-US`;
    const { data } = await axios.get(url, options);
    return data.results;

};
