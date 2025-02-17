<template>
  <div class="loginpage">
    <form @submit.prevent="handleLogin">
      <CustomInput type="email" id="email" v-model="email" placeholder="Email" required />
      <CustomInput type="password" id="password" v-model="password" placeholder="Password" required />
      <p class="error">{{ error }}</p>
      <div class="wrapper">
        <router-link to="/singup">Sing up</router-link>
        <router-link to="/reset">Forgot password</router-link>
      </div>
      <CustomButton type="submit" variant="primary" size="lg">Sign In</CustomButton>
    </form>
    <img src="../../../public/img/bg3.svg" alt="" />
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import CustomButton from "@/components/CustomButton.vue";
import api from "@/services/api";
import { mapActions } from "vuex";

export default {
  name: "UserLogin",
  components: {
    CustomInput,
    CustomButton,
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    ...mapActions(["login", "currentpage"]),
    async handleLogin() {
      try {
        const response = await api.post("/login", {
          email: this.email,
          password: this.password,
        });
        this.login(response.data.token);
        this.$router.push("/groups");
      } catch (error) {
        this.error = error.response
          ? error.response.data.error
          : "network error";
      }
    },
  },
};
</script>
