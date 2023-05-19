import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import CommunityView from '@/views/CommunityView'
import ArticleDetailView from '@/views/ArticleDetailView'
import CreateView from '@/views/CreateView'
import SignUpView from '@/views/SignUpView'
import LogInView from '@/views/LogInView'
import LogOutView from '@/views/LogOutView'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Article',
    name: 'CommunityView',
    component: CommunityView
  },
  {
    // path: '/articles/:article_pk',
    path: '/articles/:id',
    name: 'ArticleDetailView',
    component: ArticleDetailView
  },
 
  {
    path: '/create',
    name: 'CreateView',
    component: CreateView
  },

  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },

  {
    path: '/login',
    name: 'LogInView',
    component: LogInView
  },
  {
    path: '/logout',
    name: 'LogOutView',
    component: LogOutView
  },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 로그인 여부
  const isLoggedIn = store.getters.isLogin // 로그인 됨
  // const isLoggedIn = false // 로그인 안됨
  // 로그인이 필요한 페이지 지정
  const authPages = ['LogOutView']
  // 비로그인이 필요한 페이지 지정
  const notauthPages = ['LogInView', 'SignUpView']
  // const allowAuthPages = ['login']
  // 앞으로 이동할 페이지(to)가 로그인이 필요한 페이지인지 확인
  const isAuthRequired = authPages.includes(to.name)
  // 앞으로 이동할 페이지(to)가 비로그인이 필요한 페이지인지 확인
  const notisAuthRequired = notauthPages.includes(to.name)
  // const isAuthRequired = !allowAuthPages.includes(to.name)

  if (isAuthRequired && !isLoggedIn) {
    alert('로그인이 필요합니다.')
  }else if(notisAuthRequired && isLoggedIn){
    alert('이미 로그인되어 있습니다.')
  }else {
    next()
  }
})

export default router
