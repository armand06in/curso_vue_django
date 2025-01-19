// dependencias globales de vue
import { createApp } from 'vue'

import "./css/main.css"

import axios from 'axios'
import naive from 'naive-ui'

// archivos locales
import App from './App.vue'
import router from './router'

const app = createApp(App)

// en donde va $axios puede ser cualquier nombre pero por claridad se usa $axios
app.config.globalProperties.$axios = axios
window.axios = axios

app.use(router)
app.use(naive)

app.mount('#app')
