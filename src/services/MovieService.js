import axios from "axios";

const API_KEY = "1e448e0dfcdbb565f5d329820065b4d2";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = (page) => {
  return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
};

export const searchMovies = (keyword, page=1) => {
  console.log("b", keyword, page);
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}&page=${page}`
  );
};

export const fetchMovieDetails = (movieId) => {
  return axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=external_ids`
  );
};