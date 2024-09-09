<template>
  <div class="login-form">
    <large-title>Login</large-title>

    <text-input title="Username"></text-input>

    <text-input title="Password"></text-input>

    <checkbox-input title="Remember me"></checkbox-input>

    <main-button>Login</main-button>
  </div>
</template>

<script setup>

import LargeTitle from '@/shared/typography/title/large-title.vue'
import TextInput from '@/shared/inputs/text-input.vue'
import MainButton from '@/shared/buttons/main-button.vue'
import CheckboxInput from '@/shared/inputs/checkbox-input.vue'
</script>

<style scoped lang="scss">
.login-form {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
