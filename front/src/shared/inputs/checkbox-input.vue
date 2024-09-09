<template>
  <div class="checkbox">
    <div class="checkbox__wrapper">
      <input class="checkbox__input" type="checkbox">
      <span class="checkbox__title">{{ title }}</span>
    </div>
    <span class="text__error"></span>
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
.checkbox {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }

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
