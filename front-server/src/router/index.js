import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import SearchMoviesView from '@/views/SearchMoviesView'
import MovieDetailView from '@/views/MovieDetailView'
import CommunityView from '@/views/CommunityView'
import AnonymousCommunityView from '@/views/AnonymousCommunityView'
import AnonymousCreateView from '@/views/AnonymousCreateView'
import AnonymousArticleDetailView from '@/views/AnonymousArticleDetailView'
import ArticleDetailView from '@/views/ArticleDetailView'
import ArticlePutView from '@/views/ArticlePutView'
import CreateView from '@/views/CreateView'
import SignUpView from '@/views/SignUpView'
import LogInView from '@/views/LogInView'
import LogOutView from '@/views/LogOutView'
import NoneView from '@/views/NoneView'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Article',
    name: 'CommunityView',
    component: CommunityView
  },
  {
    path: '/AnonymousCommunityView',
    name: 'AnonymousCommunityView',
    component: AnonymousCommunityView
  },
  {
    path: '/AnonymousCreateView',
    name: 'AnonymousCreateView',
    component: AnonymousCreateView
  },
  {
    path: '/AnonymousArticleDetailView/:id',
    name: 'AnonymousArticleDetailView',
    component: AnonymousArticleDetailView
  },
  {
    // path: '/articles/:article_pk',
    path: '/articles/:id',
    name: 'ArticleDetailView',
    component: ArticleDetailView
  },
  {
    // path: '/articles/:article_pk',
    path: '/articles/:id/:movie/:title/:content',
    name: 'ArticlePutView',
    component: ArticlePutView
  },
 
  {
    path: '/create/:movie/:movieTitle',
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
  {
    path: '/moviedetail/:id',
    name: 'MovieDetailView',
    component: MovieDetailView
  },
  {
    path: '/Search/:query',
    name: 'SearchMoviesView',
    component: SearchMoviesView
  },
  {
    path: '/wait',
    name: 'NoneView',
    component: NoneView
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
  const authPages = ['LogOutView','ArticleDetailView','CreateView','MovieDetailView']
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
