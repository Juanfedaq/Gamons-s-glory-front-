<template>
  <div class="loginpage">
    <form @submit.prevent="handleSignup">
      <CustomInput type="text" id="username" v-model="username" placeholder="User Name" required />
      <CustomInput type="email" id="email" v-model="email" placeholder="E-mail" required />
      <CustomInput type="password" id="password" v-model="password" placeholder="Password" required />
      <CustomInput type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm Password"
        required />
      <p v-if="error" class="error">{{ error }}</p>
      <CustomButton type="submit" variant="primary" size="lg">Sign Up</CustomButton>
    </form>
    <img src="../../../public/img/bg3.svg" alt="" />
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import CustomButton from "@/components/CustomButton.vue";
import api from "@/services/api";

export default {
  components: {
    CustomInput,
    CustomButton,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    };
  },
  methods: {
    async handleSignup() {
      try {
        if (this.password !== this.confirmPassword) {
          this.error = "As senhas não coincidem";
          return;
        }

        const response = await api.post("/users", {
          name: this.username,
          email: this.email,
          password: this.password,
        });
        if (response.status === 201) {
          this.$router.push("/login");
        }
      } catch (error) {
        this.error = error.response
          ? error.response.data.error
          : "Erro de rede";
      }
    },
  },
};
</script>
<style lang="scss">
.loginpage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: rgb(201, 170, 78);
  background: radial-gradient(circle, rgba(201, 170, 78, 1) 18%, rgba(137, 97, 37, 1) 57%);
  background-size: 200% 200%;
  animation: gradient 5s infinite;

  form {
    position: absolute;
    bottom: 30%;
    z-index: 2;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: fade 4s forwards;
  }

  form {
    width: 300px;

    h3 {
      font-weight: 400;
      color: color(cBlack);
      margin-bottom: 40px;
    }
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;

    a {
      font-size: 16px;
      text-decoration: underline;
      color: color(cPrimary);
    }
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
