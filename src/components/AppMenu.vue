<template>
  <header class="appmenu">
    <div class="appmenu__wrapper">
      <router-link to="/groups">
        <figure class="appmenu__wrapper__logo">
          <img src="@/assets/img/logo.svg" alt="Logo">
        </figure>
      </router-link>
      <h2>{{ user && user.name }}</h2>
      <h3>{{ getCharName() }}</h3>
      <router-link to="/edit">
        <figure><img src="@/assets/img/edit.svg" alt="Edit"></figure>
      </router-link>
    </div>
    <a @click.prevent="handleLogout">Logout</a>
  </header>
</template>

<script>
import api from "@/services/api";
import { mapActions } from "vuex";

export default {
  name: "AppMenu",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    ...mapActions(['logout']),
    async getUser() {
      try {
        const response = await api.get("/me");
        this.user = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    getCharName() {
      return this.user && this.user.character ? this.user.character : "select your character";
    },
    async handleLogout() {
      await this.logout();
      this.$router.push('/login');
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style scoped lang="scss">
.appmenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  width: 100%;
  position: relative;
  z-index: 4;

  &__wrapper {
    display: flex;
    align-items: flex-end;
    gap: 20px;
    border-bottom: 1px solid color(cPrimary);

    &__logo {
      height: 40px;
      width: 40px;
      border: 1px solid color(cPrimary);
      transform: translateY(1px);
      padding: 2px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    h2 {
      font-size: 24px;
      font-weight: 400;
      color: color(cPrimary);
    }

    h3 {
      font-size: 16px;
      font-weight: 400;
      color: color(cWhite);
    }
  }

  a {
    color: color(cPrimary);
  }
}
</style>
