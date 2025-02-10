<template>
  <section class="groupspage">
    <GroupItem />
    <GroupItem />
    <GroupItem />
    <GroupItem />
    <GroupItem />
    <GroupItem />
    <GroupItem />
    <GroupItem />
  </section>
</template>

<script>

import GroupItem from "@/components/GroupItem.vue";

export default {
  components: {
    GroupItem,
  }
};
</script>

<style scope lang="scss">
.groupspage {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
}
</style>