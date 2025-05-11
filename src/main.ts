import '@/styles/reset.css'
import '@/styles/index.scss'
import 'uno.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupNaiveDiscreteApi } from './utils'
import { setupI18n } from '@/i18n/i18n'

async function setupApp() {
  const app = createApp(App)
  setupStore(app)
  setupNaiveDiscreteApi()
  setupI18n(app)
  await setupRouter(app)
  app.mount('#app')
}

setupApp()
