<template>
  <v-layout class="rounded rounded-md">
    <drawer-navigation></drawer-navigation>

    <app-bar></app-bar>

    <main-content></main-content>
  </v-layout>
</template>

<script setup>

import MainContent from "@/widgets/main-content/main-content.vue";
import DrawerNavigation from "@/widgets/drawer/drawer-navigation.vue";
import AppBar from "@/widgets/app-bar/app-bar.vue";
</script>

<style scoped>

</style>
