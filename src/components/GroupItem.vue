<template>
  <router-link class="groupitem" :to="`/groups/${group.id}`">
    <figure>
      <span></span>
      <h2>{{ group.name }}</h2>
      <img :src="group.image || '@/assets/img/default.jpg'" alt="Group Image">
    </figure>
  </router-link>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.groupitem {
  border: 1px solid color(cPrimary);

  figure {
    width: 100%;
    height: 100%;
    position: relative;
    transition: 0.8s ease-in-out;
    overflow: hidden;

    h2,
    span {
      width: 100%;
      text-align: center;
      position: absolute;
      color: color(cWhite);
    }

    img,
    span {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    span {
      background: rgb(0, 0, 0);
      background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
    }
  }

  &:hover {
    figure {
      filter: brightness(1.5) contrast(1.1);
    }
  }
}
</style>
