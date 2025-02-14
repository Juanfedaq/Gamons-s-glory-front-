<template>
  <section class="inputitem">
    <h2>Title</h2>
    <div v-for="(slot, slotName) in slots" :key="slotName" class="inputitem__item">
      <div class="inputitem__item__image">
        <figure>
          <img src="@/assets/img/default.jpg" alt="Item image" />
        </figure>
        <h2>{{ slotName }}</h2>
      </div>
      <div class="inputitem__item__input">
        <div class="dropdown" :class="[{ active: activeSlot === slotName }, { invert: invert.includes(slotName) }]">
          <p class="dropdown__selected pointer" :class="{ 'empty': !selectedOptions[slotName] }"
            @click.stop="toggle(slotName)">
            {{ selectedOptions[slotName] || 'empty' }}
          </p>
          <ul v-show="activeSlot === slotName" class="dropdown__options pointer" role="listbox">
            <input type="text" v-model="filters[slotName]" @input="filterSelect(slotName)" placeholder="Filter..." />
            <li v-for="option in filteredOptions[slotName]" :key="option" @click="setCurrent(slotName, option)"
              :aria-selected="option === selectedOptions[slotName]">
              {{ option }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
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
      invert: ["Trinket1", "Trinket2", "MainHand", "OffHand"],
      selectedOptions: {},
      filters: {},
      filteredOptions: {},
      activeSlot: null
    };
  },
  methods: {
    filterSelect(slotName) {
      this.filteredOptions[slotName] = (this.filters[slotName].toLowerCase() != "") ? this.slots[slotName].opcoes.filter((item) =>
        item.toLowerCase().includes(this.filters[slotName].toLowerCase())
      ) : []
    },
    toggle(slotName) {
      this.activeSlot = this.activeSlot === slotName ? null : slotName;
    },
    setCurrent(slotName, value) {
      this.selectedOptions[slotName] = value;
      this.activeSlot = null;
    },
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.activeSlot = null;
      }
    },
  },
  created() {
    Object.keys(this.slots).forEach((slot) => {
      // this.filteredOptions[slot] = this.slots[slot].opcoes;
      this.filters[slot] = "";
    });
    document.addEventListener("click", this.closeDropdown);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeDropdown);
  }
};
</script>

<style scoped lang="scss">
.inputitem {
  border: 1px solid color(cPrimary);
  padding: 16px 16px 0px;
  max-height: calc(100vh - 76px);

  h2 {
    text-align: center;
    color: color(cWhite);
    font-weight: 400;
  }

  &__item {
    display: flex;
    height: calc(6% - 8px);
    margin-bottom: 8px;
    align-items: flex-end;
    gap: 8px;

    &__image {
      height: 100%;
      display: flex;
      align-items: flex-end;
      gap: 8px;

      figure {
        height: 100%;
        width: auto;
        border: 1px solid color(cPrimary);
        aspect-ratio: 1 / 1;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }

      h2 {
        text-align: left;
        font-weight: 400;
        color: white;
        font-size: 14px;
        margin-right: 16px;
        width: 70px;
      }
    }

    &__input {
      width: 100%;
      position: relative;

      .dropdown {
        position: relative;

        &.invert {
          .dropdown__options {
            top: auto;
            bottom: 100%;
            display: flex;
            flex-direction: column-reverse;
            border: 1px solid color(cPrimary);
            border-bottom: none;
          }
        }

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
</style>
