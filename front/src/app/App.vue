<template>
  <div class="app">
      <router-view />
  </div>
</template>

<script setup lang="js">
</script>

<style lang="scss">
@import 'index.css';

.app {
  background-image: url("@/assets/images/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
}
</style>
