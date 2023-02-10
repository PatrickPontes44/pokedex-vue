import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import vuetify from '@/plugins/vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import { loadFonts } from '@/plugins/webfontloader'



// Create vue app
const app = createApp(App)

// Use plugins

// app.use(vuetify)
app.use(router)
app.use(store)

// Mount vue app
app.mount('#app')
