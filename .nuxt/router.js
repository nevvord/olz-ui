import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c21b5b9 = () => interopDefault(import('../pages/page.vue' /* webpackChunkName: "pages/page" */))
const _b436b6d0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/page",
    component: _7c21b5b9,
    name: "page___ru"
  }, {
    path: "/en/",
    component: _b436b6d0,
    name: "index___en"
  }, {
    path: "/en/page",
    component: _7c21b5b9,
    name: "page___en"
  }, {
    path: "/",
    component: _b436b6d0,
    name: "index___ru"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
