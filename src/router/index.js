import Vue from "vue";
import Router from "vue-router";
import MovieList from "@/components/MovieList.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "MovieList",
      component: MovieList,
    },
  ],
});
