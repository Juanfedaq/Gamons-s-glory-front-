<template>
  <header class="appmenu">
    <div class="appmenu__wrapper">
      <figure class="appmenu__wrapper__logo">
        <img src="@/assets/img/logo.svg" alt="">
      </figure>
      <h2>User Name</h2>
      <h3>Char name</h3>
      <router-link to="">
        <figure><img src="@/assets/img/edit.svg" alt=""></figure>
      </router-link>
    </div>
    <router-link to="/login">
      Logout
    </router-link>
  </header>
</template>

<script>
export default {
  name: "AppMenu",
};
</script>

<style scoped lang="scss">
.appmenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  width: 100%;

  &__wrapper {
    display: flex;
    align-items: flex-end;
    gap: 20px;
    border-bottom: 2px solid color(cPrimary);

    &__logo {
      height: 40px;
      width: 40px;
      border: 2px solid color(cPrimary);
      transform: translateY(2px);
      padding: 2px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    h2 {
      font-size: 24px;
      font-weight: 400;
      color: color(cPrimary);
    }

    h3 {
      font-size: 16px;
      font-weight: 400;
      color: color(cWhite);
    }
  }

  a {
    color: color(cPrimary);
    margin-bottom: 10px;
  }
}
</style>
