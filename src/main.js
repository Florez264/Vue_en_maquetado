import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import tablero from './components/tablero.vue'
import Monitor from './components/Monitor.vue'
import $ from 'jquery' // Importa jQuery
//import Registros from './components/Registros.vue';
// Importa los demás componentes de tus vistas

const routes = [
  { path: '/', component: tablero },
  { path: '/monitor', component: Monitor },
 
  // Define las demás rutas para tus vistas
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


const app = createApp(App)
app.use(router)
app.mount('#app')

window.$ = $

