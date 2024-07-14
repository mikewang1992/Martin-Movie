<template>
    <div class="card_outter">
        <div class="card my-3 movie-card" :class="{ 'movie-watched': isWatched, '': !isWatched }">
            <div class="card-img-top-wrap" >
              <img class="card-img-top" :src="posterLink" alt="Movie Poster">
            </div>
            <div class="card-body">
            <div class="movie-title">
                <h5 class="card-title">{{ movie.title }}</h5>
            </div>
            <p class="card-text">{{ movie.overview }}</p>
            <div class="button-group">
                <button class="btn" :class="{ 'btn-danger': isWatched, 'btn-primary': !isWatched }"  @click="toggleWatched">{{ isWatched ? 'Unwatch' : 'Watch' }}</button>
                <a :href="imdbLink" class="btn btn-secondary btn-imdb" target="_blank" v-if="movie.imdb_id">Read More</a>
            </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  props: ['movie'],
  computed: {
    isWatched() {
      return this.$store.state.watchedMovies.includes(this.movie.id);
    },
    posterLink() { 
        if(this.movie.poster_path)
            return `https://image.tmdb.org/t/p/w400/${this.movie.poster_path}`
        else if(this.movie.backdrop_path){
            return `https://image.tmdb.org/t/p/w400/${this.movie.backdrop_path}`
        }
        else {
            return require('@/assets/noImage.jpg');
        }
    },
    imdbLink() {
      return `https://www.imdb.com/title/${this.movie.imdb_id}`;
    },
  },
  methods: {
    toggleWatched() {
      this.$store.commit('toggleWatched', this.movie.id);
    },
  },
};
</script>

<style scoped>
.card_outter{
    height: 100%;
    padding: 10px 0px;
}
.movie-card {
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: 10px;
  background-color: #2d2d2d;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 350px;
}
.movie-watched{   
  outline: #F5C518 5px solid;
}
.movie-card .card-img-top-wrap {
  height: 300px;
}

.movie-card .card-body {
  padding:1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 230px;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(5px);
  transition: background-color 0.3s ease-in-out;
}

.movie-card .movie-title {
  text-align: center;
}

.movie-card .fa-star {
  color: #ffa500;
  margin: 0 2px;
}

.movie-card .fa-star.checked {
  color: #ffdd00;
}

.movie-card .button-group {
  display: flex;
  justify-content: space-between;
}

.movie-card .btn {
  border-radius: 30px;
  background-color: #6c757d;
  border: none;
  color: #fff;
  padding: 5px 15px;
  margin-top: 10px;
  transition: background-color 0.3s ease-in-out;
}

.movie-card .btn-primary {
  background-color: #6f42c1;
}
.movie-card .btn-imdb{
  background-color: #F5C518;
}
.movie-card .btn-primary:hover {
  background-color: #563d7c;
}

.movie-card .btn-secondary:hover {
  background-color: #5a6268;
}

.movie-card .card-text {
  margin:0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;  
}
</style>
