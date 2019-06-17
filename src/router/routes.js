export default [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Index.vue'),
    meta: {
      title: 'SEEC数据统计'
    }
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
