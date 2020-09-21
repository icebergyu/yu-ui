import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Yushirui from './components/Yushirui.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Yushirui
        }
    ]
})
createApp(App).mount('#app')
