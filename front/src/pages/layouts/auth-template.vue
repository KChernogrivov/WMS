<template>
  <div class="auth-template">
    <main-card>
      <slot></slot>
    </main-card>
  </div>
</template>

<script setup>
import MainCard from '@/shared/cards/main-card.vue'
</script>

<style scoped lang="scss">
.auth-template {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
