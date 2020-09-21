import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Yushirui from './components/Yushirui.vue'
import Iceberg from './components/Iceberg.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Yushirui
        },
        {
            path: '/xxx',
            component: Iceberg
        }
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
