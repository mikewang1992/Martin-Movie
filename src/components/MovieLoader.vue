<template>
  <div  v-if="loading" class="spinner-outter">
  <div class="global-loader">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['loading']),
  },
};
</script>

<style scoped>
.spinner-outter{
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    height: 100%;
    width: 100%;
    z-index: 9999;
    position: fixed;
}
.global-loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9998;
}
.spinner-border{
  color:#6f42c1;
}
</style>
