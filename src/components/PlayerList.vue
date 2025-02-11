<template>
  <section class="playerlist">
    <div class="playerlist__title">
      <h2>Group Name</h2>
    </div>
    <div class="playerlist__wrapper">
      <div class="playerlist__wrapper__item">
        <figure class="playerlist__wrapper__item__userimage">
          <img src="@/assets/img/default.jpg" />
          <router-link class="playerlist__wrapper__item__userimage__edit" to="/">
            <img src="@/assets/img/settings.svg" />
          </router-link>
        </figure>
        <h2 class="playerlist__wrapper__item__title">User Name</h2>
      </div>
      <div class="playerlist__wrapper__item">
        <figure class="playerlist__wrapper__item__userimage">
          <img src="@/assets/img/default.jpg" />
          <router-link class="playerlist__wrapper__item__userimage__edit" to="/">
            <img src="@/assets/img/settings.svg" />
          </router-link>
        </figure>
        <h2 class="playerlist__wrapper__item__title">User Name</h2>
      </div>
      <div class="playerlist__wrapper__item">
        <figure class="playerlist__wrapper__item__userimage">
          <img src="@/assets/img/default.jpg" />
          <router-link class="playerlist__wrapper__item__userimage__edit" to="/">
            <img src="@/assets/img/settings.svg" />
          </router-link>
        </figure>
        <h2 class="playerlist__wrapper__item__title">User Name</h2>
      </div>
      <div class="playerlist__wrapper__item">
        <figure class="playerlist__wrapper__item__userimage">
          <img src="@/assets/img/default.jpg" />
          <router-link class="playerlist__wrapper__item__userimage__edit" to="/">
            <img src="@/assets/img/settings.svg" />
          </router-link>
        </figure>
        <h2 class="playerlist__wrapper__item__title">User Name</h2>
      </div>
      <div class="playerlist__wrapper__item">
        <figure class="playerlist__wrapper__item__userimage">
          <img src="@/assets/img/default.jpg" />
          <router-link class="playerlist__wrapper__item__userimage__edit" to="/">
            <img src="@/assets/img/settings.svg" />
          </router-link>
        </figure>
        <h2 class="playerlist__wrapper__item__title">User Name</h2>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style scoped lang="scss">
.playerlist {
  border: 1px solid color(cPrimary);
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;

  &__title {
    h2 {
      font-size: 64px;
      color: color(cWhite);
      font-weight: 400;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &__item {
      border: 1px solid color(cPrimary);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding: 16px 8px;

      &__userimage {
        width: 64px;
        height: 64px;
        border: 1px solid color(cPrimary);
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }

        &__edit {
          position: absolute;
          bottom: -10px;
          right: -10px;
          height: 20px;
          width: 32px;
          object-fit: cover;
          background: color(cBlack);
          border: 1px solid color(cPrimary);

          img {
            height: 100%;
          }
        }
      }

      &__title {
        text-align: center;
        color: color(cWhite);
        font-size: 18px;
      }
    }
  }
}
</style>
