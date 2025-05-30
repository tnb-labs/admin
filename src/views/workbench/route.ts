import type { RouteType } from '~/types/router'

const Layout = () => import('@/layout/IndexView.vue')

export default {
  name: 'Dashboard',
  path: '/',
  component: Layout,
  redirect: '/workbench',
  meta: {
    order: 0
  },
  children: [
    {
      name: 'Workbench',
      path: 'workbench',
      component: () => import('./IndexView.vue'),
      meta: {
        title: '工作台',
        icon: 'mdi:home'
      }
    }
  ]
} as RouteType
