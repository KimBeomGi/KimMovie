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
    anonymousarticles: [
    ],
    username:'',
    token: null,
    cards: [],
    searchcards: [],
    cards_highscore:[],
    currentUser: {},
    profile: {},
    //////////////////////////////////////
    //home에서 쓰기위해 cards_genre 추가함
    genre_cards12: [],    // 12-모험
    genre_cards14: [],    // 14-판타지
    genre_cards16: [],    // 16-애니메이션
    genre_cards18: [],    // 18-드라마
    genre_cards27: [],    // 27-공포
    genre_cards28: [],    // 28-액션
    genre_cards35: [],    // 35-코미디
    genre_cards36: [],    // 36-역사
    genre_cards37: [],    // 37-서부
    genre_cards53: [],    // 53-스릴러
    genre_cards80: [],    // 80-범죄
    genre_cards99: [],    // 99-다큐멘터리
    genre_cards878: [],   // 878-SF
    genre_cards9648: [],  // 9648-미스터리
    genre_cards10402: [], // 10402-음악
    genre_cards10749: [], // 10749-로맨스
    genre_cards10751: [], // 10751-가족
    genre_cards10752: [], // 10752-전쟁
    genre_cards10770: [], // 10770-TV 영화
    ///////////////////////////////////////
    cards_custom: [],     // 맞춤 추천 영화
    high_vote_cards: [],  // 평점 높은 영화
    high_pop_cards: [],   // 인기 많은 영화
    latest_cards: [],     // 최신 영화

  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
      // return state.token = true
    },
    authHeader: state => ({ Authorization: `Token ${state.token}`}),
    currentUser: state => state.currentUser,
  },
  mutations: {
    // 액션의 getArticles()에서 왔다.
    // 전체 게시글 정보를 state에 있는 articles에 넣는다.
    GET_ARTICLES(state, articles) {
      state.articles = articles
    },
    GET_ANONYMOUSARTICLES(state, anonymousarticles) {
      state.anonymousarticles = anonymousarticles
    },
    // signup & login -> 완료하면 토큰 발급
    // actions의 login() 메서드에서 토큰을 가지고 온다.
    // 토큰은 state의 token변수에 넣는다.
    // 이후 전체 게시글 목록 페이지인 CommunityView로 이동한다.
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({name : 'CommunityView'}) // store/index.js $router 접근 불가 -> import를 해야함
    },
    REMOVE_TOKEN(state) {
      state.token = null
      router.push({name : 'LogInView'})
    },
    GET_CARDS(state,cards){
      state.cards = cards
    },
    GET_SEARCHCARDS(state,searchcards){
      state.searchcards = searchcards
    },
    GET_CARDS_HIGHSCORE(state,cards_highscore){
      state.cards_highscore = cards_highscore
    },
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_PROFILE: (state, profile) => state.profile = profile,
    ///////////////////////////////////////////////////////////////////////////////////////
    //home에서 쓰기위해 GET_GENRECARDS 추가함
    GET_GENRECARDS12(state,genre_cards12){    // 12-모험
      state.genre_cards12 = genre_cards12
    },
    GET_GENRECARDS14(state,genre_cards14){    // 14-판타지
      state.genre_cards14 = genre_cards14
    },
    GET_GENRECARDS16(state, genre_cards16) {    // 16-애니메이션
      state.genre_cards16 = genre_cards16
    },
    GET_GENRECARDS18(state, genre_cards18) {    // 18-드라마
      state.genre_cards18 = genre_cards18
    },
    GET_GENRECARDS27(state, genre_cards27) {    // 27-공포
      state.genre_cards27 = genre_cards27
    },
    GET_GENRECARDS28(state, genre_cards28) {    // 28-액션
      state.genre_cards28 = genre_cards28
    },
    GET_GENRECARDS35(state, genre_cards35) {    // 35-코미디
      state.genre_cards35 = genre_cards35
    },
    GET_GENRECARDS36(state, genre_cards36) {    // 36-역사
      state.genre_cards36 = genre_cards36
    },
    GET_GENRECARDS37(state, genre_cards37) {    // 37-서부
      state.genre_cards37 = genre_cards37
    },
    GET_GENRECARDS53(state, genre_cards53) {    // 53-스릴러
      state.genre_cards53 = genre_cards53
    },
    GET_GENRECARDS80(state, genre_cards80) {    // 80-범죄
      state.genre_cards80 = genre_cards80
    },
    GET_GENRECARDS99(state, genre_cards99) {    // 99-다큐멘터리
      state.genre_cards99 = genre_cards99
    },
    GET_GENRECARDS878(state, genre_cards878) {    // 878-SF
      state.genre_cards878 = genre_cards878
    },
    GET_GENRECARDS9648(state, genre_cards9648) {    // 9648-미스터리
      state.genre_cards9648 = genre_cards9648
    },
    GET_GENRECARDS10402(state, genre_cards10402) {    // 10402-음악
      state.genre_cards10402 = genre_cards10402
    },
    GET_GENRECARDS10749(state, genre_cards10749) {    // 10749-로맨스
      state.genre_cards10749 = genre_cards10749
    },
    GET_GENRECARDS10751(state, genre_cards10751) {    // 10751-가족
      state.genre_cards10751 = genre_cards10751
    },
    GET_GENRECARDS10752(state, genre_cards10752) {    // 10752-전쟁
      state.genre_cards10752 = genre_cards10752
    },
    GET_GENRECARDS10770(state, genre_cards10770) {    // 10770-TV 영화
      state.genre_cards10770 = genre_cards10770
    },
    ///////////////////////////////////////////////////////////////////////////////////////
    GET_CARDSCUSTOM(state, cards_custom) {    // 맞춤 추천 영화
      state.cards_custom = cards_custom
    },
    GET_HIGHVOTE(state, high_vote_cards) {       // 평점 높은 영화
      state.high_vote_cards = high_vote_cards
    },
    GET_HIGHPOP(state, high_pop_cards) {        // 인기 많은 영화
      state.high_pop_cards = high_pop_cards
    },
    GET_LATEST(state, latest_cards) {         // 최신 영화
      state.latest_cards = latest_cards
    },
    
  },
  actions: {
    // 회원가입 페이지인 SignUpView의 signUp()메서드를 실행하고 여기로 온다.
    // post 메서드형태의 axios를 실행한다.
    // url은 백엔드 주소를 사용한다.
    // 입력할 데이터는 아이디, 비밀번호1, 비밀번호2이다.
    // 성공적으로 데이터를 입력하면 토큰을 받고 이를 가지고 mutations의 SAVE_TOKEN() 메서드를 실행한다.
    signUp(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2
      const email = payload.email

      axios({
        method: 'post',
        url: drf.accounts.signup(),
        data: {
          username, password1, password2, email
        }
      })
        .then((res) => {
          console.log(res)
          // context.commit('SIGN_UP', res.data.key)
          context.commit('SAVE_TOKEN', res.data.key)
          alert('회원가입에 성공하였습니다! 메인화면으로 이동합니다.')
          router.push({ name: 'HomeView' })
        })
        .catch(() => {
          // console.log('회원가입 안됨')
        alert('이미 있는 아이디거나 비밀번호 양식이 올바르지 않습니다.')
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
          router.push({ name: 'HomeView' })
          context.commit('SET_PROFILE', res.data)
          console.log(res.data)
        })
      .catch(() => alert('아이디 또는 비밀번호가 틀립니다.'))
      
    },
    logout(context) {
      /* 
      POST: token을 logout URL로 보내기
        성공하면
          토큰 삭제
          사용자 알람
          LoginView로 이동
        실패하면
          에러 메시지 표시
      */
      axios({
        url: drf.accounts.logout(),
        method: 'post',
        // data: {},
        headers: context.getters.authHeader,
      })
        .then(() => {
          context.commit('REMOVE_TOKEN')
          alert('로그아웃이 완료되었습니다! 메인화면으로 이동합니다.')
          router.push({ name: 'HomeView' })
          // context.commit('SET_PROFILE', res.data)
        })
        .catch(() => {
          alert('서버에 저장되어있지 않은 아이디입니다. 강제로 없애주세요.')
        })
    },
    fetchCurrentUser(context) {
      /*
      GET: 사용자가 로그인 했다면(토큰이 있다면)
        currentUserInfo URL로 요청보내기
          성공하면
            state.cuurentUser에 저장
          실패하면(토큰이 잘못되었다면)
            기존 토큰 삭제
            LoginView로 이동
      */
      if (context.getters.isLoggedIn) {
        axios({
          url: drf.accounts.currentUserInfo(),
          method: 'get',
          headers: context.getters.authHeader,
        })
          .then(res => {
            context.commit('SET_CURRENT_USER', res.data)
            localStorage.setItem('currentUser', JSON.stringify(res.data))
            alert(res.data)
          })
          .catch(err => {
            if (err.response.status === 401) {
              context.dispatch('removeToken')
              router.push({ name: 'login' })
            }
          })
      }
    },
    // CommunityView의 getArticles() 메서드에서 왔다.
    // get을 사용하여 데이터를 받아온다.
    // 백 서버에의 http://127.0.0.1:8000/api/v1/articles/ 주소에서 받아온다.
    // state에서 토큰을 받아온다. 형태는 Token {토큰번호}
    // 토큰을 받으면 백 서버로부터 데이터를 받고 전체 게시글 정보를 가지고 GET_ARICLES 뮤테이션을 실행한다.
    getArticles(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/communities/',
        // url: 'http://localhost:8000/api/v1/articles/',
        // headers: context.getters.authHeader,
      })
        .then((res) => {
        // console.log(res, context)
          context.commit('GET_ARTICLES', res.data)
          // alert('영화 리뷰들을 확인해보세요!')
        })
        .catch(() => {
          console.log(context.getters.authHeader)
          this.state.articles=[]
          alert('게시글이 존재하지 않습니다.')
        })
    },
    getAnonymousArticles(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/communities/anonymous/',
        // url: 'http://localhost:8000/api/v1/articles/',
        // headers: context.getters.authHeader,
      })
        .then((res) => {
        // console.log(res, context)
          // console.log(res.data)
          context.commit('GET_ANONYMOUSARTICLES', res.data)
          // alert('영화 리뷰들을 확인해보세요!')
        })
        .catch(() => {
          // console.log(context.getters.authHeader)
          this.state.anonymousarticles = []
          alert('게시글이 존재하지 않습니다.')
        })
    },
    getCards(context) {
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/v1/recommend/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_CARDS', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    getSearchCards(context,query) {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/api/v1/?query=${query}`,
      })
        .then((res) => {
          context.commit('GET_SEARCHCARDS', res.data)
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
    ///////////////////////////////////////////////////////////////
    //home에서 쓰기위해 GET_GENRECARDS 추가함
    // 12-모험
    getGenrecards12(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/12/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS12', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 14-판타지
    getGenrecards14(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/14/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS14', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 16-애니메이션
    getGenrecards16(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/16/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS16', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 18-드라마
    getGenrecards18(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/18/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS18', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 27-공포
    getGenrecards27(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/27/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS27', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 28-액션
    getGenrecards28(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/28/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS28', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 35-코미디
    getGenrecards35(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/35/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS35', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 36-역사
    getGenrecards36(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/36/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS36', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 37-서부
    getGenrecards37(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/37/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS37', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 53-스릴러
    getGenrecards53(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/53/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS53', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 80-범죄
    getGenrecards80(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/80/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS80', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 99-다큐멘터리
    getGenrecards99(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/99/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS99', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 878-SF
    getGenrecards878(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/878/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS878', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 9648-미스터리
    getGenrecards9648(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/9648/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS9648', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 10402-음악
    getGenrecards10402(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/10402/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS10402', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 10749-로맨스
    getGenrecards10749(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/10749/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS10749', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 10751-가족
    getGenrecards10751(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/10751/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS10751', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 10752-전쟁
    getGenrecards10752(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/10752/',
      })
        .then((res) => {
          // console.log(res.data)
          context.commit('GET_GENRECARDS10752', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    },
    // 10770-TV 영화
    getGenrecards10770(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/genre/10770/',
      })
        .then((res) => {
          context.commit('GET_GENRECARDS10770', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ///////////////////////////////////////////////////////////////
    // 맞춤 추천
    getCardsCustom(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/recommend_custom/',
      })
        .then((res) => {
          context.commit('GET_CARDSCUSTOM', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 평점 높은 영화
    getHighVote(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/vote_average/',
      })
        .then((res) => {
          context.commit('GET_HIGHVOTE', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 인기 많은 영화
    getHighPop(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/popularity/',
      })
        .then((res) => {
          context.commit('GET_HIGHPOP', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 최신 영화
    getlatest(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/release_date/',
      })
        .then((res) => {
          context.commit('GET_LATEST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },

})
