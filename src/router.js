import Vue from 'vue'
import Router from 'vue-router'
import theHomePage from '@/views/theHomePage'
import theGamePage from '@/views/theGamePage'
import theThemesPage from '@/views/theThemesPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'theHomePage',
      component: theHomePage
    },
    {
      path: '/game/:id',
      name: 'theGamePage',
      component: theGamePage
    },
    {
      path: '/themes',
      name: 'theThemesPage',
      component: theThemesPage
    },
  ]
})
