import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
        import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/detail/:name",
    name: "Detail",
    component: () =>
        import(/* webpackChunkName: "detail" */ "../views/Detail.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
