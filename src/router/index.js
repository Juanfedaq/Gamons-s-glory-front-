import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomePage.vue";
import AppPage from "@/views/AppPage.vue";
import GroupsPage from "@/views/GroupsPage.vue";
import GroupPage from "@/views/GroupPage.vue";
import PlayerPage from "@/views/PlayerPage.vue";
import UserLogin from "@/views/Login/UserLogin.vue";
import UserReset from "@/views/Login/UserReset.vue";
import UserCreate from "@/views/Login/UserCreate.vue";
import UserResetPass from "@/views/Login/UserResetPass.vue";
import UserPage from "@/views/UserPage.vue";
import CreatePage from "@/views/CreatePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/groups",
    component: AppPage,
    children: [
      {
        path: "",
        component: GroupsPage,
      },
      {
        path: "create",
        component: CreatePage,
      },
      {
        path: ":groupId",
        component: CreatePage,
      },
      {
        path: ":groupId/:name",
        component: PlayerPage,
      },
    ],
  },

  {
    path: "/login",
    name: "login",
    component: UserLogin,
  },
  {
    path: "/signup",
    name: "signup",
    component: UserCreate,
  },
  {
    path: "/reset",
    name: "reset",
    component: UserReset,
  },
  {
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
