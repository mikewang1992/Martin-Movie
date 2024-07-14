<template>
  <div class="input-group mt-5 mb-3">
    <input v-model="keyword" @keyup.enter="search" type="text" class="form-control" placeholder="Search for a movie...">
    <div class="input-group-append">
      <button class="btn btn-outline-secondary btn-purple" @click="search">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    search() {
        this.$store.commit('setKeyword', this.keyword)
        this.$emit('search', this.keyword);
    }
  },
};
</script>

<style scoped>
.btn-purple{
    color:#6f42c1;
}
.btn-purple:hover{
    background:#6f42c1;
}
</style>
