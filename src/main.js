import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue'
import router from './router'
import axios from 'axios';

// axios.defaults.baseURL = 'http://assurmabarak-laravel.test/api';

const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia)
app.use(router)
app.config.globalProperties.$axios = axios;


app.mount('#app')
