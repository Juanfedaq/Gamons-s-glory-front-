<template>
  <div>
    <div class="responsive-alert" v-if="showAlert">
      <figure><img src="@/assets/img/sai-do-inspetor-safado.jpg" alt=""></figure>
      <p>Depois eu faço a versão Mobile</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAlert: false,
    };
  },
  mounted() {
    this.checkResolution();
    window.addEventListener('resize', this.checkResolution);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkResolution);
  },
  methods: {
    checkResolution() {
      this.showAlert = window.innerWidth < 1000;
    },
  },
};
</script>

<style lang="scss">
body,
input {
  font-family: font(primary);
}

body {
  cursor: url('../public/cursor.svg'), auto;
}

button,
a,
input,
[role="button"],
.pointer {
  cursor: url('../public/cursor-pointer.svg'), pointer;
}

section {
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.responsive-alert {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: red;
  color: white;
  text-align: center;
  z-index: 1000;

  figure {
    width: 100%;

    img {
      height: 100%;
    }
  }

  p {
    font-size: 20px;
  }
}

@media (max-width: 1000px) {
  .responsive-alert {
    display: block;
  }
}
</style>
