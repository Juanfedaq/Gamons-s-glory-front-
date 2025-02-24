<template>
  <div class="dropdown" :class="{ active: isActive }">
    <div class="dropdown__selected pointer" @click.stop="toggle">
      <input type="text" v-model="filter" :class="{ 'empty': !selected }" @input="filterOptions" placeholder="Filter..."
        @keydown="handleKey" />
    </div>
    <ul v-show="isActive" class="dropdown__options pointer" role="listbox" ref="options">
      <li v-for="option, index in filteredOptions" :key="option" @click="selectOption(option)"
        :class="filter === option ? 'selected' : ''" role="option" :aria-selected="option === selected"
        :ref="`options-${index}`">
        {{ typeof option === 'object' ? option.name : option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isActive: false,
      filter: '',
      filteredOptions: this.options,
      selected: this.value,
    };
  },
  watch: {
    options(newOptions) {
      this.filteredOptions = newOptions;
    },
    value(newValue) {
      this.selected = newValue;
    },
  },
  methods: {
    handleKey(event) {
      if (event.key === 'Escape') {
        this.close();
      } else if (event.key === 'ArrowDown') {
        const index = this.filteredOptions.indexOf(this.filter);
        const nextIndex = index === this.filteredOptions.length - 1 ? 0 : index + 1;
        this.filter = this.filteredOptions[nextIndex];
        this.$refs[`options-${nextIndex}`][0].scrollIntoView({
          block: 'nearest',
        });
      } else if (event.key === 'ArrowUp') {
        const index = this.filteredOptions.indexOf(this.filter);
        const prevIndex = index === 0 ? this.filteredOptions.length - 1 : index - 1;
        this.filter = this.filteredOptions[prevIndex];
        this.$refs[`options-${prevIndex}`][0].scrollIntoView({
          block: 'nearest',
        });
      } else if (event.key === 'Enter') {
        this.close();
      }
    },
    close() {
      this.filterOptions()
      this.isActive = false;
    },
    toggle() {
      this.isActive = !this.isActive;
    },
    filterOptions() {
      this.filteredOptions = this.filter
        ? this.options.filter((option) =>
          option.toLowerCase().includes(this.filter.toLowerCase())
        )
        : this.options;
    },
    selectOption(option) {
      if (typeof option === 'object') {
        this.filter = option.name;
        this.$emit('input', option.id);
      } else {
        this.filter = option;
        this.$emit('input', option);
      }
      this.isActive = false;
    },
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isActive = false;
      }
    },
  },
  created() {
    document.addEventListener('click', this.closeDropdown);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeDropdown);
  },
};
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
  width: 100%;

  &__selected {
    margin: 0;
    border: none;
    font-size: 14px;
    color: color(cWhite);
    transition: background 0.3s;

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

    li {
      padding: 6px;
      color: white;
      font-size: 14px;
      transition: background 0.3s;

      &.selected {
        background: color(cPrimary);
        color: color(cWhite);
      }
    }

    li:hover {
      background: color(cPrimary);
      color: color(cWhite);
    }
  }
}
</style>