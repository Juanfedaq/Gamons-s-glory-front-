<template>
  <form class="playerlist">
    <div class="playerlist__title">
      <figure class="playerlist__title__figure">
        <span class="playerlist__title__figure__button">
          <img class="playerlist__title__figure__button__img" src="@/assets/img/edit.svg" alt="">
          <input class="playerlist__title__figure__button__input" type="file" id="userImage" @change="onImageChange" />
        </span>
        <img class="playerlist__title__figure__image" :src="userImage" alt="User Image" v-if="userImage" />
      </figure>
      <input class="playerlist__title__input" type="text" placeholder="empty" />
    </div>
    <div class="playerlist__wrapper">
      <div class="playerlist__wrapper__item" v-for="(user, index) in users" :key="index">
        <figure class="playerlist__wrapper__item__userimage">
          <img src="@/assets/img/default.jpg" />
        </figure>
        <div class="playerlist__wrapper__item__edit">
          <div class="dropdown" :class="{ active: activeSlot === index }">
            <p class="dropdown__selected pointer" :class="{ 'empty': !selectedOptions[index] }"
              @click.stop="toggle(index)">
              {{ selectedOptions[index] || 'empty' }}
            </p>
            <ul v-show="activeSlot === index" class="dropdown__options pointer" role="listbox">
              <input type="text" v-model="filters[index]" @input="filterSelect(index)" placeholder="Filter..." />
              <li v-for="option in filteredOptions[index]" :key="option" @click="setCurrent(index, option)"
                :aria-selected="option === selectedOptions[index]">
                {{ option }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      slots: {
        Head: { opcoes: ["abacate", "laranja", "melao", "melancia"] },
        Neck: { opcoes: ["banana", "uva", "goiaba", "morango"] },
        Shoulders: { opcoes: ["abacaxi", "pera", "kiwi", "caju"] },
        Back: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
        Chest: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
        Wrist: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
        Hands: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
        Waist: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
        Legs: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
        Feet: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
        Ring1: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
        Ring2: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
        Trinket1: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
        Trinket2: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
        MainHand: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
        OffHand: { opcoes: ["manga", "tangerina", "limão", "maracujá"] },
      },
      selectedOptions: Array(5).fill(''),
      userImage: null,
      users: Array(5).fill(null), // Inicializa com 5 itens vazios
      selectedUsers: Array(5).fill(''), // Inicializa com 5 seleções vazias
      userOptions: ["UserUserUser1-arzalon", "UserUserUser2", "UserUserUser3", "UserUserUser4", "UserUserUser5"], // Opções de usuários
      filters: Array(5).fill(''),
      filteredOptions: Array(5).fill([]),
      activeSlot: null,
    };
  },
  methods: {
    onImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.userImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    updateUser(index, value) {
      this.selectedUsers[index] = value;
    },
    filterSelect(index) {
      this.filteredOptions[index] = this.filters[index]
        ? this.userOptions.filter((item) =>
          item.toLowerCase().includes(this.filters[index].toLowerCase())
        )
        : this.userOptions;
    },
    toggle(index) {
      this.activeSlot = this.activeSlot === index ? null : index;
    },
    setCurrent(index, value) {
      this.selectedOptions[index] = value;
      this.activeSlot = null;
    },
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.activeSlot = null;
      }
    },
  },
  created() {
    this.userOptions.forEach((option, index) => {
      this.filteredOptions[index] = this.userOptions;
      this.filters[index] = "";
    });
    document.addEventListener("click", this.closeDropdown);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeDropdown);
  }
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
  padding: 16px;
  gap: 16px;
  position: relative;
  z-index: 4;

  &__title {
    display: flex;
    justify-content: center;
    width: 100%;

    &__figure {
      height: 128px;
      width: 128px;
      border: 1px solid color(cPrimary);
      position: relative;
      object-fit: cover;

      &__button {
        position: absolute;
        width: 32px;
        height: 32px;
        top: -16px;
        right: -16px;
        background: color(cBlack);
        border-bottom: 1px solid color(cPrimary);
        border-left: 1px solid color(cPrimary);
        display: flex;
        justify-content: center;
        align-items: center;

        &__input {
          height: 32px;
          height: 32px;
          opacity: 0;
        }

        &__img {
          position: absolute;
          width: 16px;
          height: 16px;
        }
      }

      &__image {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }

    &__input {
      font-size: 64px;
      background: none;
      color: color(cWhite);
      font-weight: 400;
      border: none;
      border-bottom: 1px solid color(cPrimary);
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
      width: 100%;

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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        .dropdown {
          position: relative;
          width: 100%;

          &__selected {
            margin: 0;
            border: none;
            border-bottom: 1px solid color(cPrimary);
            font-size: 14px;
            color: color(cWhite);
            transition: background 0.3s;

            &.empty {
              filter: opacity(.3);
            }
          }

          &__options {
            position: absolute;
            background: color(cBlack);
            border: 1px solid color(cPrimary);
            border-top: none;
            list-style: none;
            width: 100%;
            max-height: 150px;
            overflow-y: auto;
            padding: 0;
            margin: 0;
            top: 100%;
            left: 0;
            z-index: 2;
            transition: opacity 0.3s ease-in-out;

            &::-webkit-scrollbar {
              width: 12px;
            }

            &::-webkit-scrollbar-track {
              background: color(cBlack);
            }

            &::-webkit-scrollbar-thumb {
              background-color: color(cPrimary);
              border-radius: 2px;
              border: 5px solid color(cBlack);
            }

            input {
              width: calc(100% - 12px);
              margin: 6px;
              padding: 4px;
              background: none;
              border: none;
              border-bottom: 1px solid color(cPrimary);
              color: color(cWhite);
              font-size: 14px;
            }

            li {
              padding: 6px;
              color: white;
              font-size: 14px;
              transition: background 0.3s;
            }

            li:hover {
              background: color(cPrimary);
              color: color(cWhite);
            }
          }
        }
      }
    }
  }
}
</style>
