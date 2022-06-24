import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { projectAuth } from './firebase/config'

import './assets/tailwind.css'
import './assets/style.scss'


let app
createApp(App).use(store).use(router).mount('#app')
// projectAuth.onAuthStateChanged(()=>{
//     if (!app) {
//         createApp(App).use(store).use(router).mount('#app')
//     }
// })