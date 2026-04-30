import './assets/style.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { getMessage } from './utils/message.js'

console.log(getMessage())

createApp(App).mount('#app')