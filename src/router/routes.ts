import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SimpleLayoutVue from '@/layouts/SimpleLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/PlainAlertView.vue'),
    meta: { layout: DefaultLayout }
    // path: '/',
    // name: 'plain_alert',
    // component: () => import('@/views/PlainAlertView.vue'),
    // meta: { layout: DefaultLayout }
  },
  {
    path: '/plain_alert',
    name: 'plain_alert',
    component: () => import('@/views/PlainAlertView.vue'),
    meta: { layout: DefaultLayout }
  },
  {
    path: '/cva_alert',
    name: 'cva_alert',
    component: () => import('@/views/CvaAlertView.vue'),
    meta: { layout: DefaultLayout }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
    meta: { layout: SimpleLayoutVue }
  }
]

export default routes
