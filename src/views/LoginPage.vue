<template>
  <section class="loginpage">
    <UserCreate />
    <UserLogin v-show="currentPage === 'login'" />
    <UserReset v-show="currentPage === 'reset'" />
    <UserResetPass v-show="currentPage === 'resetPass'" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import UserCreate from "@/components/UserCreate.vue";
import UserLogin from "@/components/UserLogin.vue";
import UserReset from "@/components/UserReset.vue";
import UserResetPass from "@/components/UserResetPass.vue";

export default {
  components: {
    UserCreate,
    UserLogin,
    UserReset,
    UserResetPass,
  },
  computed: {
    ...mapGetters(["currentPage"]),
  },
};
</script>

<style scope lang="scss">
.loginpage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  form {
    position: absolute;
    bottom: 20%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>