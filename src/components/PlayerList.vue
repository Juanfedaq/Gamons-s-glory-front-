<template>
  <section class="playerlist">
    <div class="playerlist__title">
      <h2>Group Name</h2>
    </div>
    <div class="playerlist__wrapper">
      <div class="playerlist__wrapper__item" v-for="(user, index) in users" :key="index">
        <figure class="playerlist__wrapper__item__userimage">
          <img src="@/assets/img/default.jpg" />
        </figure>
        <div class="playerlist__wrapper__item__edit">
          <select v-model="selectedUsers[index]" @change="updateUser(index, $event.target.value)">
            <option v-for="option in userOptions" :key="option" :value="option">{{ option }}</option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: Array(5).fill(null), // Inicializa com 5 itens vazios
      selectedUsers: Array(5).fill(''), // Inicializa com 5 seleções vazias
      userOptions: ["User 1", "User 2", "User 3", "User 4", "User 5"], // Opções de usuários
    };
  },
  methods: {
    updateUser(index, value) {
      this.selectedUsers[index] = value;
    },
  },
};
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
      }

      &__edit {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        select {
          width: 100%;
          background: none;
          border: 1px solid color(cPrimary);
          color: color(cWhite);
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
