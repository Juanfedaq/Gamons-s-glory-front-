<template>
  <div class="grouppage" :class="customClass">
    <PlayerList />
    <GroupGraphic />
    <PlayerGraphic @mouseover="activeClass('active1')" @mouseleave="removeClass()" />
    <PlayerGraphic @mouseover="activeClass('active2')" @mouseleave="removeClass()" />
    <PlayerGraphic @mouseover="activeClass('active3')" @mouseleave="removeClass()" />
    <PlayerGraphic @mouseover="activeClass('active4')" @mouseleave="removeClass()" />
    <PlayerGraphic @mouseover="activeClass('active5')" @mouseleave="removeClass()" />
  </div>
</template>

<script>
import GroupGraphic from "@/components/GroupGraphic.vue";
import PlayerList from "@/components/PlayerList.vue";
import PlayerGraphic from "@/components/PlayerGraphic.vue";

export default {
  data() {
    return {
      customClass: null
    }
  },
  components: {
    PlayerGraphic,
    GroupGraphic,
    PlayerList,
  },
  methods: {
    activeClass(name) {
      this.customClass = name
    },
    removeClass() {
      this.customClass = null
    }
  }

};
</script>

<style scope lang="scss">
.grouppage {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 8px;
  height: calc(100% - 50px);
  grid-template-rows: 50%;

  section,
  a {
    height: calc(50% - 4px);
    grid-column: span 2;

    &:nth-child(1),
    &:nth-child(2) {
      grid-column: span 5;
    }
  }

  &.active1 {
    a:not(:nth-child(1), :nth-child(2), :nth-child(3)) {
      opacity: 0.5;
    }
  }

  &.active2 {
    a:not(:nth-child(1), :nth-child(2), :nth-child(4)) {
      opacity: 0.5;
    }
  }

  &.active3 {
    a:not(:nth-child(1), :nth-child(2), :nth-child(5)) {
      opacity: 0.5;
    }
  }

  &.active4 {
    a:not(:nth-child(1), :nth-child(2), :nth-child(6)) {
      opacity: 0.5;
    }
  }

  &.active5 {
    a:not(:nth-child(1), :nth-child(2), :nth-child(7)) {
      opacity: 0.5;
    }
  }

}
</style>