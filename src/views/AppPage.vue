<template>
  <div class="mainsystem" @mousemove="handleMouseMove">
    <AppMenu />
    <PlayerGraphic />
    <span v-for="(block, index) in blocks" :key="index" :class="'block-' + (index + 1)" :style="block.style"></span>
  </div>
</template>

<script>
import AppMenu from "@/components/AppMenu.vue";
import PlayerGraphic from "@/components/PlayerGraphic.vue";

export default {
  components: {
    AppMenu,
    PlayerGraphic,
  },
  data() {
    return {
      blocks: Array.from({ length: 10 }, () => ({
        x: 0,
        y: 0,
        style: {},
      })),
    };
  },
  methods: {
    handleMouseMove(event) {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      this.blocks.forEach((block, index) => {
        const speed = (index + 1) * 0.1;
        const moveX = (clientX - centerX) * speed * 0.02;
        const moveY = (clientY - centerY) * speed * 0.02;

        block.style = {
          transform: `translate(${moveX}px, ${moveY}px)`,
          transition: "transform 0.1s ease-out",
        };
      });
    },
  },
};
</script>

<style scope lang="scss">
.mainsystem {
  position: relative;
  height: 100vh;
  width: 100vw;
  background: color(cBlack);
  overflow: hidden;
}

span {
  position: absolute;
  border: 1px solid color(cPrimary);
  transition: transform 0.1s ease-out;
  filter: blur(5px);
}

.block-1 {
  top: 40%;
  left: 50%;
  height: 200px;
  width: 200px;
}

.block-2 {
  top: 10%;
  left: 10%;
  height: 350px;
  width: 350px;
}

.block-3 {
  top: 60%;
  left: 20%;
  height: 100px;
  width: 100px;
}

.block-4 {
  top: 20%;
  left: 40%;
  height: 300px;
  width: 300px;
}

.block-5 {
  top: -10%;
  left: 70%;
  height: 400px;
  width: 400px;
}

.block-6 {
  top: 30%;
  left: 80%;
  height: 450px;
  width: 450px;
}

.block-7 {
  top: 60%;
  left: 60%;
  height: 1000px;
  width: 1000px;
}

.block-8 {
  top: 40%;
  left: -10%;
  height: 50px;
  width: 50px;
}

.block-9 {
  top: 20%;
  left: 0%;
  height: 150px;
  width: 150px;
}

.block-10 {
  top: 70%;
  left: 30%;
  height: 350px;
  width: 350px;
}
</style>