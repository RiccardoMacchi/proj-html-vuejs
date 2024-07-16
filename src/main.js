import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'; //Import di bootstrap

createApp(App).use(router).mount('#app')
