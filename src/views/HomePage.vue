<template>
  <div class="homepage">
    <HeaderMenu />
    <video controls="false" autoplay muted loop>
      <source :src="videoSource" type="video/mp4">
      erro
    </video>
    <span>
      <h1>coming soon</h1>
    </span>
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu.vue";

export default {
  components: {
    HeaderMenu,
  },
  data() {
    return {
      videoSource: require('@/assets/videos/video1.mp4')
    }
  }
};
</script>

<style scope lang="scss">
.homepage {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(2px 4px 6px black);

    // background: rgb(137,97,37);
    // background: linear-gradient(0deg, rgba(137,97,37,0.3) 0%, rgba(137,97,37,1) 50%, rgba(137,97,37,0.3) 100%);
    h1 {
      font-size: clamp(15rem, 50vw, 10rem);
      color: color(cWhite);
    }
  }
}
</style>
