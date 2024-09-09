<template>
  <div class="text-input">
    <span class="text-input__title">{{ title }}</span>
    <input class="text-input__input" type="text" :placeholder="placeholder">
    <span class="text-input__error"></span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  placeholder: {
    type: String,
    default: 'Type here...'
  },
  title: {
    type: String,
    default: 'Title'
  }
})
</script>

<style scoped lang="scss">
.text-input {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__title {
    font-size: var(--font-size-small);
  }

  &__input {
    height: 32px;
    border: 1px solid var(--secondary);
    border-radius: 5px;
    padding: 0 4px;
  }
}
</style>
