// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' // Import Vuetify

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify) // Add Vuetify to the app

app.mount('#app')
