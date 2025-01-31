import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomePage.vue";
import AppPage from "@/views/AppPage.vue";
import UserLogin from "@/views/Login/UserLogin.vue";
import UserReset from "@/views/Login/UserReset.vue";
import UserCreate from "@/views/Login/UserCreate.vue";
import UserResetPass from "@/views/Login/UserResetPass.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/app",
    name: "app",
    component: AppPage,
  },
  {
    path: "/login",
    name: "login",
    component: UserLogin,
  }, {
    path: "/singup",
    name: "singup",
    component: UserCreate,
  }, {
    path: "/reset",
    name: "reset",
    component: UserReset,
  }, {
    path: "/resetpass",
    name: "resetpass",
    component: UserResetPass,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
