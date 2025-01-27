<template>
  <div class="loginpage">
    <HeaderMenu />
    <form @submit.prevent="handleNewPassword">
      <h3>
        Please enter your new password below. Make sure it's something secure
        and easy for you to remember.
      </h3>
      <CustomInput type="password" id="newPassword" v-model="newPassword" placeholder="New password" required />
      <CustomInput type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm new password"
        required />
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      <CustomButton type="submit" variant="primary" size="lg">Change</CustomButton>
    </form>
    <img src="../../../public/img/bg3.svg" alt="" />
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import CustomButton from "@/components/CustomButton.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import api from "@/services/api";

export default {
  components: {
    CustomInput,
    CustomButton,
    HeaderMenu,
  },
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    handleNewPassword() {
      if (this.newPassword !== this.confirmPassword) {
        this.errorMessage = "As senhas não coincidem";
        this.successMessage = "";
        return;
      }

      console.log("Nova senha:", this.newPassword);
      this.successMessage = "Senha atualizada com sucesso";
      this.errorMessage = "";
      this.ChangePass();
      this.newPassword = "";
      this.confirmPassword = "";
    },
    async ChangePass() {
      try {
        const response = await api.put("/recover", {
          token: this.$route.query.token,
          newPassword: this.newPassword,
        });
        console.log(response);
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
