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

    <v-btn
      text="Logout"
      @click="logout"
    ></v-btn>
  </v-app-bar>
</template>

<script setup>
import {computed} from "vue";
import {useTheme} from 'vuetify'
import router from "@/app/router";

const appName = computed(() => {
  return `${import.meta.env.VITE_APP_PROJECT_NAME} ${import.meta.env.VITE_APP_VERSION}`;
})


const theme = useTheme()

function toggleTheme() {
  const newTheme = theme.global.current.value.dark ? 'light' : 'dark';
  theme.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
}

const logout = () => {
  localStorage.removeItem('token');
  router.push('/login');
}
</script>

<style scoped>

</style>
