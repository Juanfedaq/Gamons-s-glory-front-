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
        path: '',
        component: GroupsPage,
      },
      {
        path: ':groups',
        component: GroupPage,
      },
      {
        path: '/:group/:name',
        component: PlayerPage,
      }
    ],
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
