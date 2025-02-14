<template>
  <div class="createpage">
    <PlayerList />
  </div>
</template>

<script>
import PlayerList from "@/components/PlayerList.vue";

export default {
  components: {
    PlayerList,
  },
};
</script>

<style scope lang="scss">
.createpage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 50px);
}
</style>