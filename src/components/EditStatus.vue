<template>
  <section class="editstatus">
    <GroupGraphic />
    <PlayerGraphic />
    <form>
      form
    </form>
  </section>
</template>

<script>
import PlayerGraphic from "@/components/PlayerGraphic.vue";
import GroupGraphic from "@/components/GroupGraphic.vue";

export default {
  components: {
    PlayerGraphic,
    GroupGraphic,
  }
};
</script>

<style scoped lang="scss">
.editstatus {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 8px;

  form {
    height: 100%;
    padding: 16px;
    border: 1px solid color(cPrimary);
  }
}
</style>
