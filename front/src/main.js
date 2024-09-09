import { createApp } from 'vue'
import App from './app/App.vue'
import { router } from './app/provides'

createApp(App).use(router).mount('#app')
