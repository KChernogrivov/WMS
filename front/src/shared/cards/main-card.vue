<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  width: {
    type: Number,
    default: 500
  }
})
</script>

<style scoped lang="scss">
.card {
  background-color: #fff;
  border-radius: var(--border-radius);
  padding: var(--regular-padding);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>
