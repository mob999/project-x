import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/global.css'
import axios from 'axios'
import Store from './store/index.js'
const app = createApp(App)
app.provide('$axios', axios)

app.use(router)
app.use(ElementPlus)    
app.use(Store)
app.mount('#app')
