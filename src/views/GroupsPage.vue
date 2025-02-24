<template>
  <section class="groupspage">
    <GroupItem v-for="group in groups" :key="group.id" :group="group" />
    <RouterLink to="/groups/create" class="create-group-button">
      +
    </RouterLink>
  </section>
</template>

<script>
import GroupItem from "@/components/GroupItem.vue";

export default {
  components: {
    GroupItem,
  },
  data() {
    return {
      groups: []
    };
  },
  created() {
    this.fetchGroups();
  },
  methods: {
    async fetchGroups() {
      try {
        const response = await this.$api.get('/users/groups');
        this.groups = response.data.groups;
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.groupspage {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
}

.create-group-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid color(cPrimary);
  background: none;
  font-size: 128px;
  font-weight: 400;
  color: color(cPrimary);
  text-align: center;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: color(cPrimary);
    color: color(cWhite);
  }
}
</style>