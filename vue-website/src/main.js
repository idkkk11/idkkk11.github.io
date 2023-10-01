import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSmoothScroll from 'v-smooth-scroll'

// createApp(App).use(router).mount('#app')

const app = createApp(App)

app.use(router)
app.use(VueSmoothScroll)

app.mount('#app')
