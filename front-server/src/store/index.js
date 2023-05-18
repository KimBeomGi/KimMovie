import Vue from 'vue'
import Vuex from 'vuex'
import drf from '@/api/drf'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '../router'

Vue.use(Vuex)


export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    articles: [
    ],
    token: null,
    cards: [],
    cards_highscore:[]
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
      // return state.token = true
    },
    authHeader: state => ({ Authorization: `Token ${state.token}`}),
  },
  mutations: {
    // 액션의 getArticles()에서 왔다.
    // 전체 게시글 정보를 state에 있는 articles에 넣는다.
    GET_ARTICLES(state, articles) {
      state.articles = articles
    },
    // signup & login -> 완료하면 토큰 발급
    // actions의 login() 메서드에서 토큰을 가지고 온다.
    // 토큰은 state의 token변수에 넣는다.
    // 이후 전체 게시글 목록 페이지인 ArticleView로 이동한다.
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({name : 'ArticleView'}) // store/index.js $router 접근 불가 -> import를 해야함
    },
    GET_CARDS(state,cards){
      state.cards = cards
    },
    GET_CARDS_HIGHSCORE(state,cards_highscore){
      state.cards_highscore = cards_highscore
    },
  },
  actions: {
    // ArticleView의 getArticles() 메서드에서 왔다.
    // get을 사용하여 데이터를 받아온다.
    // 백 서버에의 http://127.0.0.1:8000/api/v1/articles/ 주소에서 받아온다.
    // state에서 토큰을 받아온다. 형태는 Token {토큰번호}
    // 토큰을 받으면 백 서버로부터 데이터를 받고 전체 게시글 정보를 가지고 GET_ARICLES 뮤테이션을 실행한다.
    getArticles(context) {
      axios({
        method: 'get',
        url: drf.articles.articles(),
        headers:{
          Authorization : `Token ${context.state.token}`
        }
      })
        .then((res) => {
        // console.log(res, context)
          context.commit('GET_ARTICLES', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 회원가입 페이지인 SignUpView의 signUp()메서드를 실행하고 여기로 온다.
    // post 메서드형태의 axios를 실행한다.
    // url은 백엔드 주소를 사용한다.
    // 입력할 데이터는 아이디, 비밀번호1, 비밀번호2이다.
    // 성공적으로 데이터를 입력하면 토큰을 받고 이를 가지고 mutations의 SAVE_TOKEN() 메서드를 실행한다.
    signUp(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2

      axios({
        method: 'post',
        url: drf.accounts.signup(),
        data: {
          username, password1, password2
        }
      })
        .then((res) => {
          // console.log(res)
          // context.commit('SIGN_UP', res.data.key)
          context.commit('SAVE_TOKEN', res.data.key)
        })
        .catch((err) => {
          // console.log('회원가입 안됨')
        console.log(err)
      })
    },
    // 로그인페이지에서 아이디와 비밀번호를 payload에 담아 여기로 온다.
    // post 메서드의 axios를 실행하고 url은 백서버의 주소를 받아온다.
    // data로는 payload에 있는 값들인 username과 password를 사용한다.
    // data를 성공적으로 전달해서 Token을 받으면 
    // 이를 인자로 가지고 mutations의 SAVE_TOKEN 메서드를 실행한다.
    login(context, payload) {
      const username = payload.username
      const password = payload.password

      axios({
        method: 'post',
        url: drf.accounts.login(),
        data: {
          username, password
        }
      })
        .then((res) => {
        context.commit('SAVE_TOKEN', res.data.key)
        })
      .catch((err) => console.log(err))
    },
    getCards(context) {
      axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=2b46fb99f88138f86fc6c767ebe959ec&language=ko-KR&page=1',
      })
        .then((res) => {
          context.commit('GET_CARDS', res.data.results)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    getCards_highscore(context) {
      axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=2b46fb99f88138f86fc6c767ebe959ec',
      })
        .then((res) => {
          context.commit('GET_CARDS_HIGHSCORE', res.data.results)
        })
        .catch((err) => {
        console.log(err)
      })
    },
  },

})
