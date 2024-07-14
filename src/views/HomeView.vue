<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/MovieList.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
