import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'vue-toast-notification/dist/theme-default.css'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import ToastPlugin from 'vue-toast-notification'
import App from './App.vue'
import { router } from './router.js'
import { store } from './store.js'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(store)
app.use(ToastPlugin, {
  duration: 5000,
  position: 'bottom-left',
  dismissible: true
})
app.mount('#app')
