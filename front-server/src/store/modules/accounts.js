// // 라우팅을 하기위해 라우터 라이브러리 불러오기
// import router from '@/router'
// // 서버에 응답을 요청하기위해 axios 라이브러리 불러오기
// import axios from 'axios'
// // urls 경로를 불러오기 위해 drf.js 파일 불러오기
// import drf from '@/api/drf'

// // 비디오를 가져올 때 필요한 url
// const VIDEO_API = '/videos?api_key='
// // 내 themoviedb API_Key
// const API_KEY = '2b46fb99f88138f86fc6c767ebe959ec'
// // themoviedb의 기본 API_url
// const BASE_URL = 'https://api.themoviedb.org/3/movie/'
// // 이 url 뒤에 key를 넣으면 유튜브 영상 url이 나온다.
// const VIDEO_URL = 'https://www.youtube.com/embed/'

// export default {
//   // namespaced를 true로 설정하면 모듈은 자체적인 네임스페이스를 가지게 된다.
//   // namespaced: true,

//   state: {
//     // localStorage에서 token이라는 key의 value를 가져온다. 없다면 ''를 가져온다.
//     token: localStorage.getItem('token') || '' ,
//     // drf.accounts.currentUserInfo()에서 받아온 현재 유저의 정보를 저장한다.
//     currentUser: {},
//     // 로그인 후 받은 정보를 받아 저장하고, 수정될 때마다 여기 정보가 저장된다.
//     profile: {},
//     // 에러메시지를 저장한다.
//     authError: null,
//     // 모달 토글 변수. 영화 디테일 창을 띄울 때 True로 바뀐다.
//     dialogDetail: false,
//     // 모달 토글 변수. 댓글 생성 창을 띄울 때 True로 바뀐다.
//     dialogComment: false, 
//     // 현재 영화를 저장한다. 딕셔너리 형식이고 review 등의 key가 있다.
//     movie: null,
//     // 내가 팔로우한 사람들을 저장한다.
//     follow: {},
//     // 내가 찜한 영화들을 저장한다.
//     followMovies: {},
//     // 프로필을 업데이트 한 후 데이터를 저장한다.
//     profileEdit: {},
//     // 영화 트레일러의 키를 저장한다.
//     movieTrailer: null,
//     // username을 입력해 프로필을 불러오면 이를 저장한다.
//     nowUserProfile: {},
//   },

//   getters: {
//     // 토큰이 있으면 True를, 없으면 False를 반환한다.
//     isLoggedIn: state => !!state.token,
//     // state에 있는 현재 유저 정보를 반환한다. (인증 유저)
//     currentUser: state => state.currentUser,
//     // 내 프로필 정보를 저장한다.
//     profile: state => state.profile,
//     // 에러메세지를 반환한다.
//     authError: state => state.authError,
//     // 토큰 인증 양식을 반환한다.
//     authHeader: state => ({ Authorization: `Token ${state.token}`}),
//     // 상세영화 모달 토글 변수를 반환한다.
//     dialogDetail: state => state.dialogDetail,
//     // 선택한 영화를 반환한다.
//     movie: state => state.movie,
//     // 내가 팔로우한 사람들을 반환한다.
//     follow: state => state.follow,
//     // 내가 찜한 영화들을 반환한다.
//     followMovies: state => state.followMovies,
//     // 삭제 예정
//     currentReview: state => state.currentReview,
//     // 업데이트된 프로필 정보를 반환한다.
//     profileEdit: state => state.profileEdit,
//     // 유튜브 트레일러 주소를 반환한다.
//     videoUrl: state => VIDEO_URL + state.movieTrailer,
//     // 영화 트레일러의 키가 있으면 True를 반환한다.
//     isVideo: state => (state.movieTrailer != null),
//     // 방금 불러온 프로필을 반환한다.
//     nowUserProfile: state => state.nowUserProfile,
//   },

//   mutations: {
//     SET_TOKEN: (state, token) => state.token = token,
//     SET_CURRENT_USER: (state, user) => state.currentUser = user,
//     SET_PROFILE: (state, profile) => state.profile = profile,
//     SET_NOW_USER_PROFILE: (state, nowUserProfile) => state.nowUserProfile = nowUserProfile,
//     SET_EDIT_PROFILE: (state, profileEdit) => state.profileEdit = profileEdit,
//     SET_AUTH_ERROR: (state, error) => state.authError = error,
//     SET_DIALOG_DETAIL: (state) => state.dialogDetail = !state.dialogDetail,
//     SET_DIALOG_COMMENT : (state) => state.dialogComment = !state.dialogComment,
//     SET_MOVIE: (state, movie) => state.movie = movie,
//     SET_CURRENT_REVIEW: (state, review) => state.review = review,
//     SET_COMMENT_LIKED: (state) => state.commentLiked = !state.commentLiked, // comment_liked의 경우 시험용으로 comment 좋아요 정보를 받아오고 있지 않음, 추후 추가할것
//     SET_FOLLOW: (state, follow) => state.follow = follow,
//     SET_FOLLOW_MOVIES: (state, followMovies) => state.followMovies = followMovies,
//     SET_MOVIE_REVIEWS: (state, reviews) => (state.movie.reviews = reviews),
//     SET_MOVIE_TRAILER: (state, video) => (state.movieTrailer = video),
//   },

//   actions: {
//     saveToken({ commit }, token) {
//       // 토큰 저장 메서드.
//       // 토큰을 인자로 받아와서 mutations에 있는 SET_TOKEN메서드로 보내준다.
//       // token 값을 localstorage에 저장한다.
//       commit('SET_TOKEN', token)
//       localStorage.setItem('token', token, Date.now()+1)
//     },
//     removeToken({ commit }) {
//       // 토큰 제거 메서드.
//       // mutations에 있는 SET_TOKEN에 ''값을 전달해 토큰을 없앤다.
//       // localstorage에 있는 토큰을 ''값으로 바꿔 제거한다.
//       commit('SET_TOKEN', '')
//       localStorage.setItem('token', '')
//     },

//     login({ commit, dispatch }, credentials) {
//       /* 
//       POST: 사용자 입력정보를 login URL로 보내기
//         성공하면
//           응답 토큰 저장
//           현재 사용자 정보를 받아 currentUser에 저장한다.
//           메인 페이지(ArticleListView)로 이동
//           drf.accounts.login()에서 받아온 데이터를 profile에 저장한다.
//         실패하면
//           에러 메시지 표시
//       */
//       axios({
//         url: drf.accounts.login(),
//         method: 'post',
//         data: credentials
//       })
//         .then(res => {
//           const token = res.data.key
//           dispatch('saveToken', token)
//           dispatch('fetchCurrentUser')
//           router.push({ name: 'home' })
//           commit('SET_PROFILE', res.data)
//         })
//         .catch(err => {
//           console.error(err.response.data)
//           commit('SET_AUTH_ERROR', err.response.data)
//         })
//     },

//     signup({ commit, dispatch }, formData) {
//     //   /* 
//     //   POST: 사용자 입력정보를 signup URL로 보내기
//     //     성공하면
//     //       drf.accounts.signup()에서 응답한 데이터 중 토큰을  state.token에 저장
//     //       drf.accounts.currentUserInfo()에서 현재 사용자 정보 받기
//     //       메인 페이지(ArticleListView)로 이동
//     //       drf.accounts.signup()에서 응답받은 데이터를 profile에 저장한다.
//     //     실패하면
//     //       에러 메시지 표시
//     //   */
//       axios({
//         url: drf.accounts.signup(),
//         method: 'post',
//         data: formData,
//         // headers: {'Content-Type': 'multipart/form-data'}
//       })
//         .then(res => {
//           const token = res.data.key
//           dispatch('saveToken', token)
//           dispatch('fetchCurrentUser')
//           router.push({ name: 'home' })
//           commit('SET_PROFILE', res.data)
//         })
//         .catch(err => {
//           console.error(err.response.data)
//           commit('SET_AUTH_ERROR', err.response.data)
//         })
//     },

//     logout({ getters, dispatch, commit }) {
//       /* 
//       POST: token을 logout URL로 보내기
//         성공하면
//           토큰 삭제
//           사용자 알람
//           LoginView로 이동
//           state.profile에 drf.accounts.logout()이 응답한 데이터를 저장한다. ('' 저장)
//         실패하면
//           에러 메시지 표시
//       */
//       axios({
//         url: drf.accounts.logout(),
//         method: 'post',
//         // data: {},
//         headers: getters.authHeader,
//       })
//         .then((res) => {
//           dispatch('removeToken')
//           alert('성공적으로 logout!')
//           router.push({ name: 'login' })
//           commit('SET_PROFILE', res.data)
//         })
//         .error(err => {
//           console.error(err.response)
//         })
//     },

//     fetchCurrentUser({ commit, getters, dispatch }) {
//       /*
//       GET: 사용자가 로그인 했다면(토큰이 있다면)
//         currentUserInfo URL로 요청보내기
//           성공하면
//             state.currentUser에 저장
//             localStorage에 currnetUser key를 생성하고 여기에 
//             drf.accounts.currentUserInfo()로부터 응답받은 데이터를 저장한다.
//           실패하면(토큰이 잘못되었다면)
//             기존 토큰 삭제
//             LoginView로 이동
//       */
//       if (getters.isLoggedIn) {
//         axios({
//           url: drf.accounts.currentUserInfo(),
//           method: 'get',
//           headers: getters.authHeader,
//         })
//           .then(res => {
//             commit('SET_CURRENT_USER', res.data)
//             localStorage.setItem('currentUser', JSON.stringify(res.data))
//           })
//           .catch(err => {
//             if (err.response.status === 401) {
//               dispatch('removeToken')
//               router.push({ name: 'login' })
//             }
//           })
//       }
//     },

//     fetchProfile({ commit, getters }, { username }) {
//       // username을 인자로 drf.accounts.profile(username)에서 프로필을 불러온다.
//       // username이 적합한 값이라 성공적으로 불러오면, state.profile에 저장한다.
//       axios({
//         url: drf.accounts.profile(username),
//         method: 'get',
//         headers: getters.authHeader,
//       })
//         .then(res => {
//           commit('SET_PROFILE', res.data)
//         })
//         .catch(err => console.log(err.response))
//     },

//     fetchNowUserProfile({ commit, getters }, { username }) {
//       // username을 인자로 drf.accounts.profile(username)에서 프로필을 불러온다.
//       // username이 적합한 값이라 성공적으로 불러오면, state.nowUserProfile에 저장한다.
//       axios({
//         url: drf.accounts.profile(username),
//         method: 'get',
//         headers: getters.authHeader,
//       })
//         .then(res => {
//           commit('SET_NOW_USER_PROFILE', res.data)
//         })
//         .catch(err => console.log(err.response))
//     },

//     movieSelect({commit}, movie){
//       // movie를 인자로 받아 state.movie에 저장한다.
//       commit('SET_MOVIE', movie)
//     },

//     followProfile({ commit, getters }, userPk) {
//       // userPk를 인자로 받아 drf.accounts.follow(userPk)에 post요청을 한다.
//       // drf.accounts.follow(userPk)의 응답으로 내 프로필의 팔로워에 그사람을 등록하고
//       // drf.accounts.follow(userPk)의 응답으로 내 프로필을 업데이트한다.
//       axios({
//         url: drf.accounts.follow(userPk),
//         method: 'post',
//         headers: getters.authHeader
//       })
//       .then(res => {
//         commit('SET_FOLLOW', res.data)
//         commit('SET_NOW_USER_PROFILE', res.data)
//       })
//       .catch(err => console.log(err.response))
//     },

//     followMovies({ commit, getters }, moviePk) {
//       // moviePk 인자로 받아 drf.accounts.followMovies(moviePk)에 post요청을 한다.
//       // drf.accounts.followMovies(moviePk)의 응답으로 내 프로필의 팔로워에 그사람을 등록하고
//       // drf.accounts.followMovies(moviePk)의 응답으로 내 프로필을 업데이트한다.
//       axios({
//         url: drf.accounts.followMovies(moviePk),
//         method: 'post',
//         headers: getters.authHeader
//       })
//       .then(res => {
//         commit('SET_FOLLOW_MOVIES', res.data)
//         commit('SET_PROFILE', res.data)
//       })
//       .catch(err => console.log(err.response))
//     },
    

//     updateProfile({ commit, getters }, { currentUsername, username, genre_likes, email, profile_img }) {
//       // 현재유저이름, 유저이름, 좋아하는장르, 이메일, 프로필이미지를 인자로받는다.
//       // 바꾼 값들을 데이터로 입력한다.
//       // state.profileEdit에 drf.accounts.profile(currentUsername)로부터 응답받은 값을 넣는다.
//       // state.profile에 drf.accounts.profile(currentUsername)로부터 응답받은 값을 넣는다.
//       // profile 페이지로 이동한다. 이때 인자로는 username을 전달한다.
//       axios({
//         url: drf.accounts.profile(currentUsername),
//         method: 'put',
//         data: { username, genre_likes, email, profile_img },
//         headers: getters.authHeader,
//       })
//         .then(res => {
//           commit('SET_EDIT_PROFILE', res.data)
//           commit('SET_PROFILE', res.data)
//           router.push({
//             name: 'profile',
//             params: { username }
//           })
//         })
//         .catch(err=> console.log(err.response))
//     },

//     createReview({ commit, getters}, { moviePk, content }) {
//       // 영화 리뷰를 쓴다.
//       // 영화 고유값과 리뷰를 인자로 받아온다.
//       // drf.accounts.reviews(moviePk)에 영화 고유값을 인자로 넣고
//       // post로 content를 전달해 응답을 받는다.
//       // state.movie에 있는 review키의 value에 그 응답을 저장한다.
//       const review = {content}
//       axios({
//         url: drf.accounts.reviews(moviePk),
//         method: 'post',
//         data: review,
//         headers: getters.authHeader,
//       })
//         .then(res => {
//           commit('SET_MOVIE_REVIEWS', res.data)
//         })
//         .catch(err => console.error(err.response))
//     },
//     likeReview({ commit, getters}, { moviePk, reviewPk }) {
//       // 해당 리뷰에 좋아요 버튼을 누른다.
//       // 영화 고유값과 리뷰 고유값을 인자로 받아온다.
//       // drf.accounts.likeReview(moviePk, reviewPk)에 인자로 전달한다.
//       // state.movie에 있는 review키의 value에
//       // drf.accounts.likeReview(moviePk, reviewPk)로부터 받은 응답을 저장한다.
//       axios({
//         url: drf.accounts.likeReview(moviePk, reviewPk),
//         method: 'post',
//         headers: getters.authHeader,
//       })
//         .then(res => {
//           console.log(res.data)
//           commit('SET_MOVIE_REVIEWS', res.data)
//         })
//         .catch(err => console.error(err.response))
//     },

//     deleteReview({ commit, getters }, { moviePk, reviewPk }) {
//       // 해당 리뷰를 삭제한다.
//       // 메소드는 delete로 한다.
//       // 영화 고유값과 리뷰 고유값을 인자로 받아온다.
//       // drf.accounts.review(moviePk, reviewPk)에 인자로 전달한다.
//       // state.movie에 있는 review키의 value에
//       // drf.accounts.review(moviePk, reviewPk)로부터 받은 응답을 저장한다.
//       if (confirm('정말 댓글을 삭제하시겠습니까?')){
//         axios({
//           url: drf.accounts.review(moviePk, reviewPk),
//           method: 'delete',
//           headers: getters.authHeader,
//         })
//           .then(res => {
//             commit('SET_MOVIE_REVIEWS', res.data)
//             })
//           .catch(err => console.error(err.response))
//       }
//     },

//     getMovieTrailer({ commit }, MoviePk) {
//       // MoviePk를 인자로 받아
//       // BASE_URL + String(MoviePk) + VIDEO_API + API_KEY로부터 응답을 받는다.
//       // state.movieTrailer에 그 응답을 저장한다.
//       axios({
//         url: BASE_URL + String(MoviePk) + VIDEO_API + API_KEY
//       })
//         .then(res => {
//           commit('SET_MOVIE_TRAILER', res.data.results[0].key)
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     }
//   },
// }
