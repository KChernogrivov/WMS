<template>
  <div class="main-button" :class="[type]">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  type: {
    type: String,
    default: 'primary'
  }
})
</script>

<style scoped lang="scss">
.main-button {
  font-weight: bold;
  padding: 10px 5px;
  border-radius: 8px;
  cursor: pointer;
}

.primary {
  background-color: var(--accent);
  color: var(--accent-2);
  text-align: center;
}
</style>
