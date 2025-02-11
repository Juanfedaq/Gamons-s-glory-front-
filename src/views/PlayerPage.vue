<template>
  <div class="playerpage">
    <InputItem />
    <InputItem />
    <EditStatus />
  </div>
</template>

<script>

import InputItem from "@/components/InputItem.vue";
import EditStatus from "@/components/EditStatus.vue";

export default {
  components: {
    EditStatus,
    InputItem,
  }
};
</script>

<style scope lang="scss">
.playerpage {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  height: calc(100% - 50px);

  section,
  a {
    grid-column: span 1;
  }
}

.block {
  position: absolute;
  border: 1px solid color(cPrimary);
  transition: transform 0.1s ease-out;
  filter: blur(5px);

  &-1 {
    top: 40%;
    left: 50%;
    height: 200px;
    width: 200px;
  }

  &-2 {
    top: 10%;
    left: 10%;
    height: 350px;
    width: 350px;
  }

  &-3 {
    top: 60%;
    left: 20%;
    height: 100px;
    width: 100px;
  }

  &-4 {
    top: 20%;
    left: 40%;
    height: 300px;
    width: 300px;
  }

  &-5 {
    top: -10%;
    left: 70%;
    height: 400px;
    width: 400px;
  }

  &-6 {
    top: 30%;
    left: 80%;
    height: 450px;
    width: 450px;
  }

  &-7 {
    top: 60%;
    left: 60%;
    height: 1000px;
    width: 1000px;
  }

  &-8 {
    top: 40%;
    left: -10%;
    height: 50px;
    width: 50px;
  }

  &-9 {
    top: 20%;
    left: 0%;
    height: 150px;
    width: 150px;
  }

  &-10 {
    top: 70%;
    left: 30%;
    height: 350px;
    width: 350px;
  }
}
</style>
