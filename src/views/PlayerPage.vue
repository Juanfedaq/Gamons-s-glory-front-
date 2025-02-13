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
  position: relative;
  z-index: 2;

  section {
    grid-column: span 1;
  }

  .custom-cursor-wrapper {
    cursor: url('../../public/cursor.svg'), auto;
  }

  .custom-cursor {
    display: none;
  }
}
</style>
