import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  // Home Component
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // Dashboard Component
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
