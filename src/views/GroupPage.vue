<template>
  <div class="apppage__dashboard">
    <PlayerList />
    <GroupGraphic />
    <PlayerGraphic />
    <PlayerGraphic />
    <PlayerGraphic />
    <PlayerGraphic />
    <PlayerGraphic />
  </div>
</template>

<script>
import GroupGraphic from "@/components/GroupGraphic.vue";
import PlayerList from "@/components/PlayerList.vue";
import PlayerGraphic from "@/components/PlayerGraphic.vue";

export default {
  components: {
    PlayerGraphic,
    GroupGraphic,
    PlayerList,
  }
};
</script>

<style scope lang="scss">
.apppage {
  position: relative;
  height: 100vh;
  width: 100%;
  background: color(cBlack);
  padding: 16px;
  overflow: hidden;

  &__dashboard {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 8px;
    height: calc(100% - 50px);
    grid-template-rows: 50%;

    section {
      height: calc(50% - 4px);
      grid-column: span 2;

      &:nth-child(1),
      &:nth-child(2) {
        grid-column: span 5;
      }
    }
  }

}

.block {
  position: absolute;
  border: 2px solid color(cPrimary);
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