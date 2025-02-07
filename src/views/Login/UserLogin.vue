<template>
  <div class="loginpage">
    <!-- <HeaderMenu /> -->
    <form @submit.prevent="handleLogin">
      <CustomInput type="email" id="email" v-model="email" placeholder="Email" required />
      <CustomInput type="password" id="password" v-model="password" placeholder="Password" required />
      <p class="error">{{ error }}</p>
      <div class="wrapper">
        <a href="#" @click.prevent="currentpage('create')">Create account</a>
        <a href="#" @click.prevent="currentpage('reset')">Forgot password</a>
      </div>
      <CustomButton type="submit" variant="primary" size="lg">Sign In</CustomButton>
    </form>
    <img src="../../../public/img/bg3.svg" alt="" />
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import CustomButton from "@/components/CustomButton.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import api from "@/services/api";
import { mapActions } from "vuex";

export default {
  name: "UserLogin",
  components: {
    CustomInput,
    CustomButton,
    HeaderMenu,
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
        console.log(response);
        this.login();
        this.$router.push("/");
      } catch (error) {
        this.error = error.response
          ? error.response.data.error
          : "Erro de rede";
      }
    },
  },
};
</script>
