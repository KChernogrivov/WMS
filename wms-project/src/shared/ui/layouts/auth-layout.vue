<template>
  <v-layout class="auth-layout d-flex justify-center align-center" style="min-height: 100vh">
    <main-content></main-content>
  </v-layout>
</template>

<script setup>
import MainContent from "@/widgets/main-content/main-content.vue";
</script>

<style scoped>
.auth-layout {
  background-image: url("../../images/auth-background.jpg");
  background-size: cover;
}
</style>
