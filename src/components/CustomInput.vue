<template>
  <div class="custom-input">
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" :placeholder="placeholder" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" :required="required" :class="inputClass" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    inputClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.custom-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border-bottom: 1px solid color(cPrimary);

  label {
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    border: none;
    background: none;
    text-align: center;
    font-size: 20px;
    color: color(cPrimary);

    &::placeholder {
      color: color(cPrimary);
      opacity: .2;
    }
  }
}
</style>
