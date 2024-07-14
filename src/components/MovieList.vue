<template>
  <div class="container">
    <SearchBar @search="handleSearch" />
    <div class="row justify-content-center">
      <div class="d-flex justify-content-center col-lg-4 col-sm-6 col-12" v-for="movie in movies" :key="movie.id">
        <MovieItem :movie="movie" />
      </div>
      <div v-if="movies.length===0">no results found</div>
    </div>
    <MoviePagination :total="totalPages" :propCurrentPage="propCurrentPage" @page="handlePage" />
  </div>
</template>

<script>
import MovieItem from '@/components/MovieItem.vue'; 
import SearchBar from '@/components/SearchBar.vue'; 
import MoviePagination from '@/components/MoviePagination.vue'; 
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    MovieItem,
    SearchBar,
    MoviePagination,
  },
  data() {
    return {
      propCurrentPage: 1,
    };
  },
  computed: {
    ...mapState(['movies', 'totalPages']),
  },
  methods: {
    ...mapActions(['fetchMovies', 'searchMovies']),
    handleSearch(query) {
      this.propCurrentPage = 1; 
      if (query === '') {
        this.fetchMovies(1);
      } else {
        this.searchMovies({ keyword:query });
      }
    },
    handlePage(page) {
      this.propCurrentPage = page
      if (this.$store.state.keyword === '') {
        this.fetchMovies(page);
      } else {
        this.searchMovies({ keyword:this.$store.state.keyword, page });
      }
    }
  },
  created() {
    this.fetchMovies(1);
  },
};
</script>
<style scoped>
</style>
