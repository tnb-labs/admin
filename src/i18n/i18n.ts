import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { Composer } from 'vue-i18n'
import zh_CN from './zh_CN.json'

let i18n: ReturnType<typeof createI18n>

export function setupI18n(app: App) {
  i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'zh_CN',
    fallbackLocale: 'zh_CN',
    messages: {
      zh_CN: zh_CN
    }
  })
  app.use(i18n)
}

export const trans = (key: string, attributes = {}) => {
  return (i18n.global.t as Composer['t'])(key, attributes)
}
