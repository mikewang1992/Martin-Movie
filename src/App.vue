<template>
  <div id="app">
    <MovieLoader/>
    <NavBar/>
    <div class="banner py-5">
      <div class="banner-content container">
        <h1>Movie Grid 3</h1>
        <p>I'm breadcrumb</p>
      </div>
    </div> 
    <router-view/>
  </div>
</template>

<script>
  import MovieLoader from '@/components/MovieLoader.vue'
  import NavBar from '@/components/NavBar.vue'
  export default {
    components: {
      MovieLoader,
      NavBar
    },
  }
</script>

<style lang="scss">
.banner {
  position: relative;
  width: 100%;
  background: url('assets/backbanner.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(102, 51, 153, 0.7), rgba(255, 51, 102, 0.7));
  filter: blur(5px);
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2;
  text-align: center;
}
</style>
