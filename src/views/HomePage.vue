<template>
  <div class="homepage">
    <HeaderMenu />
    <img src="../../public/img/bg.svg" />
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu.vue";

export default {
  components: {
    HeaderMenu,
  },
};
</script>

<style scope lang="scss">
.homepage {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  background: rgb(201, 170, 78);
  background: radial-gradient(circle, rgba(201, 170, 78, 1) 18%, rgba(137, 97, 37, 1) 57%);
  background-size: 200% 200%;
  animation: gradient 5s infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@keyframes gradient {

  0%,
  100% {
    background-position: 0% 0%;
  }

  25% {
    background-position: 100% 0%;
  }

  50% {
    background-position: 100% 100%;
  }

  75% {
    background-position: 0% 100%;
  }
}
</style>
