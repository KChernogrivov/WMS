<template>
  <auth-template>
    <div class="auth-page">
      <login-form></login-form>
    </div>
  </auth-template>
</template>

<script setup>

import LoginForm from '@/features/login/ui/LoginForm.vue'
import AuthTemplate from '@/pages/layouts/auth-template.vue'
</script>

<style scoped lang="scss">
.auth-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
