import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'
// import product from '@/components/product'
// import operation from '@/components/operation'
// import news from '@/components/news'
// import cases from '@/components/cases'
// import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index
    // },
    // {
    //   path: '/product',
    //   name: 'product',
    //   component: product
    // },
    // {
    //   path: '/operation',
    //   name: 'operation',
    //   component: operation
    // },
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: news
    // },
    // {
    //   path: '/cases',
    //   name: 'cases',
    //   component: cases
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: contact
    // },
    {
      path: '/',
      component: resolve => require(['@/components/index.vue'], resolve)
    },
    {
      path: '/product',
      component: resolve => require(['@/components/product.vue'], resolve)
    },
    {
      path: '/operation',
      component: resolve => require(['@/components/operation.vue'], resolve)
    },
    {
      path: '/news',
      component: resolve => require(['@/components/news.vue'], resolve)
    },
    {
      path: '/cases',
      component: resolve => require(['@/components/cases.vue'], resolve)
    },
    {
      path: '/contact',
      component: resolve => require(['@/components/contact.vue'], resolve)
    }
  ]
})
