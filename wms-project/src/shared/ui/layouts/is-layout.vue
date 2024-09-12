<template>
  <component :is="currentLayout"></component>
</template>

<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute()
const currentLayout = computed(() => {
  return route.meta.layout;
})
</script>

<style scoped>

</style>
