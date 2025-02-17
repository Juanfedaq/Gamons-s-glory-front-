<template>
  <div class="loginpage">
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
import api from "@/services/api";

export default {
  components: {
    CustomInput,
    CustomButton,
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
        this.errorMessage = "Passwords do not match";
        this.successMessage = "";
        return;
      }

      console.log("New password:", this.newPassword);
      this.successMessage = "Password updated successfully";
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
        this.errorMessage = error.response
          ? error.response.data.error
          : "Network error";
      }
    },
  },
};
</script>
