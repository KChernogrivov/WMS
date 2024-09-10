<template>
  <v-app-bar class="px-3">
    {{ appName }}

    <v-spacer></v-spacer>

    <v-btn
      :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      text="Toggle Theme"
      slim
      @click="toggleTheme"
    ></v-btn>
  </v-app-bar>
</template>

<script setup>
import {computed} from "vue";
import {useTheme} from 'vuetify'

const appName = computed(() => {
  return `${import.meta.env.VITE_APP_PROJECT_NAME} ${import.meta.env.VITE_APP_VERSION}`;
})


const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>

</style>
