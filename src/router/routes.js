export default [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/404',
    name: '找不到页面',
    component: () => import('@/views/PageNotFound.vue'),
    meta: {
      title: '找不到页面'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]
