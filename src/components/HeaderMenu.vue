<template>
  <div class="headermenu">
    <router-link to="/">Home</router-link>
    <router-link to="/login">App</router-link>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.headermenu {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  a {
    color: color(cPrimary);
  }
}
</style>
