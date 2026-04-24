import './assets/main.css'
import PrimeVue from 'primevue/config' // 匯入設定
import Aura from '@primevue/themes/aura' // 匯入 Aura 主題
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 使用 PrimeVue 並套用主題
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
