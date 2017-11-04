import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/index.vue'], resolve)
    },
    {
      path: '/about',
      component: resolve => require(['@/components/about.vue'], resolve),
      children:[
      	{
  	      path: 'show',
  	      component: resolve => require(['@/components/show.vue'], resolve)
  	    },
        {
          path: 'honor',
          component: resolve => require(['@/components/honor.vue'], resolve)
        },
        {
          path: 'partner',
          component: resolve => require(['@/components/partner.vue'], resolve)
        },
        {
          path: 'culture',
          component: resolve => require(['@/components/culture.vue'], resolve)
        },
        {
          path: 'dev',
          component: resolve => require(['@/components/dev.vue'], resolve)
        },
      ]
    },
    {
      path: '/partner_list',
      component: resolve => require(['@/components/partner_list.vue'], resolve)
    },
    {
      path: '/product',
      component: resolve => require(['@/components/product.vue'], resolve),
      children:[
        {
          path: 'detail',
          component: resolve => require(['@/components/product_detail.vue'], resolve)
        }
      ]
    },
    {
      path: '/news',
      component: resolve => require(['@/components/news.vue'], resolve),
      children:[
        {
          path: ':id',
          component: resolve => require(['@/components/news_list.vue'], resolve)
        }
      ]
    },
    {
      path: '/newsDetail',
      component: resolve => require(['@/components/news_detail.vue'], resolve)
    },
    {
      path: '/join',
      component: resolve => require(['@/components/join.vue'], resolve)
    },
    {
      path: '/contact',
      component: resolve => require(['@/components/contact.vue'], resolve)
    }
  ]
})