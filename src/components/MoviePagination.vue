<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center py-5">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <button class="page-link" @click="previousPage">Previous</button>
      </li>
      <li class="page-item disabled">
        <span class="page-link">{{ currentPage }} / {{ total }}</span>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === total }">
        <button class="page-link page-link-purple" @click="nextPage">Next</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    propCurrentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentPage: this.propCurrentPage,
    };
  },
  watch: {
    propCurrentPage(newVal) {
      this.currentPage = newVal;
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.total) {
        this.currentPage++;
        this.$emit('page', this.currentPage);
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$emit('page', this.currentPage);
      }
    },
  },
};
</script>

<style scoped>
.page-link {
  color:#6f42c1;
}
.page-link:hover {
  color:#6f42c1;
}
</style>
