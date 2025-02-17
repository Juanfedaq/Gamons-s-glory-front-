<template>
  <div class="loginpage">
    <form @submit.prevent="handleRecovery">
      <h3>Forgot your password?</h3>
      <h3>
        No problem. Please enter your registered email address, and we'll send
        you a recovery link to reset your password.
      </h3>
      <CustomInput type="email" id="email" v-model="email" placeholder="E-mail" required />
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      <CustomButton type="submit" variant="primary" size="lg">Recovery</CustomButton>
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
      email: "",
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    handleRecovery() {
      if (!this.validateEmail(this.email)) {
        this.errorMessage = "Please enter a valid email address";
        this.successMessage = "";
        return;
      }

      console.log("Email for password recovery:", this.email);
      this.successMessage = "Instructions sent to your email";
      this.sendmail();
      this.email = "";
    },
    validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    async sendmail() {
      try {
        const response = await api.post("/recover", {
          email: this.email,
        });
        console.log(response);
      } catch (error) {
        this.errorMessage = error.response
          ? error.response.data.error
          : "Network error";
      }
    },
  },
};
</script>
