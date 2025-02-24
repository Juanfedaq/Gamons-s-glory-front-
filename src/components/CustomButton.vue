<template>
  <component :is="componentType" :class="[
    'custom-button',
    size,
    variant,
    { disabled: isDisabled },
  ]" :disabled="isDisabled" @click="handleClick" v-bind="componentProps">
    <slot />
  </component>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "button", // opções: button, link
      validator: (value) => ["button", "link"].includes(value),
    },
    size: {
      type: String,
      default: "md", // opções: sm, md, lg
      validator: (value) => ["sm", "md", "lg"].includes(value),
    },
    variant: {
      type: String,
      default: "primary", // opções: primary, secondary, danger, success
      validator: (value) =>
        ["primary", "secondary", "danger", "success"].includes(value),
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "",
    },
  },
  computed: {
    componentType() {
      return this.type === "link" ? "router-link" : "button";
    },
    componentProps() {
      return this.type === "link" ? { to: this.to } : {};
    },
  },
  methods: {
    handleClick(event) {
      if (!this.isDisabled) {
        this.$emit("click", event);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.custom-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-family: font(primary);
  font-weight: 400;
  transition: all 0.3s ease;
  margin-top: 40px;
}

.primary {
  border: 1px solid color(cPrimary);
  background: none;
  color: color(cPrimary);

  &:hover {
    background: color(cBlack);
    color: color(cWhite);
  }
}

.secondary {}

.danger {}

.success {}

/* Sizes */
.sm {}

.md {}

.lg {
  width: 100%;
  font-size: 24px;
}

.disabled {
  cursor: not-allowed;
}
</style>
