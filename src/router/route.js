import Vue from 'vue'
import VueRouter from 'vue-router'

//定义路由表
const routes = [
  {
    path: '/',
    name: 'homePage',
    meta: {
      title: '首页',
      hideInMenu: true,
    },
    component: () => import('../views/Home'),
  }
]

//重定义push函数
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

//注册router-view
Vue.use(VueRouter)

//创建VueRouter实例
const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  // mode: 'history',
  routes,
})

export default router
