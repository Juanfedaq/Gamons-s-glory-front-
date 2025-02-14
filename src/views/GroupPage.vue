<template>
  <div class="grouppage" :class="customClass">
    <PlayerList />
    <GroupGraphic />
    <PlayerGraphic @mouseover="activeClass('active1')" @mouseleave="removeClass()" index="0" />
    <PlayerGraphic @mouseover="activeClass('active2')" @mouseleave="removeClass()" index="1" />
    <PlayerGraphic @mouseover="activeClass('active3')" @mouseleave="removeClass()" index="2" />
    <PlayerGraphic @mouseover="activeClass('active4')" @mouseleave="removeClass()" index="3" />
    <PlayerGraphic @mouseover="activeClass('active5')" @mouseleave="removeClass()" index="4" />
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
  a,
  form {
    height: calc(50% - 4px);
    grid-column: span 2;
    transition: .3s ease-in-out;

    &:nth-child(1),
    &:nth-child(2) {
      grid-column: span 5;
    }
  }

  &.active1 {
    a:not(:nth-child(1), :nth-child(2), :nth-child(3)) {
      transform: translateY(8px);
      border: 1px solid transparent
    }
  }

  &.active2 {
    a:not(:nth-child(1), :nth-child(2), :nth-child(4)) {
      transform: translateY(8px);
      border: 1px solid transparent;
    }
  }

  &.active3 {
    a:not(:nth-child(1), :nth-child(2), :nth-child(5)) {
      transform: translateY(8px);
      border: 1px solid transparent;
    }
  }

  &.active4 {
    a:not(:nth-child(1), :nth-child(2), :nth-child(6)) {
      transform: translateY(8px);
      border: 1px solid transparent;
    }
  }

  &.active5 {
    a:not(:nth-child(1), :nth-child(2), :nth-child(7)) {
      transform: translateY(8px);
      border: 1px solid transparent;
    }
  }

}
</style>