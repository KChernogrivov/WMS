<template>
  <component :is="currentLayout"></component>
</template>

<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";
import {BaseLayout} from "@/shared/ui/layouts";

const route = useRoute()
const currentLayout = computed(() => {
  return route.meta.layout || BaseLayout
})
</script>

<style scoped>

</style>
