import Vue from "vue";
import Vuex from "vuex";
import { fetchPopularMovies, searchMovies,fetchMovieDetails } from "@/services/MovieService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    totalPages: 0,
    loading: false,
    keyword: "",
    watchedMovies: JSON.parse(localStorage.getItem("watchedMovies")) || [],
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setKeyword(state, keyword) {
      state.keyword = keyword;
    },
    setMovies(state, { movies, totalPages }) {
      state.movies = movies;
      state.totalPages = totalPages;
    },
    toggleWatched(state, movieId) {
      const index = state.watchedMovies.indexOf(movieId);
      if (index > -1) {
        state.watchedMovies.splice(index, 1);
      } else {
        state.watchedMovies.push(movieId);
      }
      localStorage.setItem(
        "watchedMovies",
        JSON.stringify(state.watchedMovies)
      );
    },
  },
  actions: {
    async fetchMovies({ commit }, page) {
      commit("setLoading", true);
      try {
        const response = await fetchPopularMovies(page);
        const movies = response.data.results;

        const movieDetailsPromises = movies.map((movie) =>
          fetchMovieDetails(movie.id)
        );
        const moviesWithDetails = await Promise.all(movieDetailsPromises);
        const moviesWithImdb = moviesWithDetails
          .map((res) => res.data)
          .filter((movie) => movie.external_ids.imdb_id);

        commit("setMovies", {
          movies: moviesWithImdb,
          totalPages: response.data.total_pages,
        });
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        commit("setLoading", false);
      }
    },
    async searchMovies({ commit }, { keyword, page }) {
      commit("setLoading", true);
      console.log("a", keyword, page);
      try {
        const response = await searchMovies(keyword, page);
        const movies = response.data.results;
        const movieDetailsPromises = movies.map((movie) =>
          fetchMovieDetails(movie.id)
        );
        const moviesWithDetails = await Promise.all(movieDetailsPromises);
        const moviesWithImdb = moviesWithDetails
          .map((res) => res.data)
          .filter((movie) => movie.external_ids.imdb_id);

        commit("setMovies", {
          movies: moviesWithImdb,
          totalPages: response.data.total_pages,
        });
      } catch (error) {
        console.error("Error searching movies:", error);
      } finally {
        commit("setLoading", false);
      }
    },
  },
});
