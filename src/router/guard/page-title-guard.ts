import type { Router } from 'vue-router'
import { trans } from '@/i18n/i18n'

const baseTitle: string = import.meta.env.VITE_APP_TITLE

export function createPageTitleGuard(router: Router) {
  router.afterEach((to) => {
    const pageTitle = String(to.meta.title)
    if (pageTitle) document.title = `${trans(pageTitle)} | ${baseTitle}`
    else document.title = baseTitle
  })
}
