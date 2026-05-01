import './assets/style.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { getMessage } from './utils/message.js'

console.log(getMessage())

const app = createApp(App)

app.use(router)
app.mount('#app')