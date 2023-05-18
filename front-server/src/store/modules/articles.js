// import axios from 'axios'
// import drf from '@/api/drf'
// import router from '@/router'

// // 로대쉬 함수를 쓰기위해 해당 라이브러리를 불러온다.
// import _ from 'lodash'
// // import accounts from './accounts'

// export default {
//   // namespaced: true,
//   state: {
//     // 모든 게시글의 목록을 저장한다.
//     articles: [],
//     // 각 게시글의 세부정보를 저장한다.
//     article: {},
//     // 찜한 게시글의 목록을 저장한다.
//     likedArticleList: [],  // 게시글 리스트
//   },

//   getters: {
//     // 모든 게시글의 목록을 반환한다.
//     articles: state => state.articles,
//     // 각 게시글의 세부정보를 반환한다.
//     article: state => state.article,
//     // 찜한 게시글의 목록을 반환한다.
//     likedArticleList: state => state.likedArticleList,

//     isAuthor: (state, getters) => {
//       // 유저가 동일한지 확인
//       // ?를 사용해 state.article.user가 null 또는 undefined인 경우에도 
//       // 예외를 발생시키지 않고 속성에 접근
//       // 게시글의 유저와 인증 유저가 같은 경우 True를, 아닐 경우 False를 반환한다.
//       return state.article.user?.username === getters.currentUser.username
//     },
//     // state.article이 비어있지 않을 때 True를 반환하고, 비어있을 때 False를 반환한다.
//     isArticle: state => !_.isEmpty(state.article),
//     isCommentLiked: (state, getters) => {
//       // 현재 로그인한 사용자가 해당 댓글을 좋아요했는지 여부를 나타내는 플래그다.
//       // 해당 게시글에 좋아요를 누른사람이 1명이라도 있으면 내 고유값을 nowUser에 저장한다.
//       // 게시글을 좋아요 누른 사람들을 쭉 비교하며 nowUser와 같은 값이 있는지 확인한다.
//       // 있으면 isLiked를 True로 바꾼다. 이후 isLiked를 반환한다.
//       // 즉 내가 이 게시글을 좋아요 누른상태라면 True를 반환한다. 
//       let isLiked = false
//       if (state.article.liked_users){
//         const nowUser = getters.currentUser.pk
//         for (let user of state.article.liked_users) {
//           if (user.pk === nowUser){
//             isLiked = true
//             break
//           }
//         }
//       }
//       return isLiked
//     },
//   },

//   mutations: {
//     SET_ARTICLES: (state, articles) => state.articles = articles,
//     SET_ARTICLE: (state, article) => state.article = article,
//     SET_ARTICLE_COMMENTS: (state, comments) => (state.article.comments = comments),
//     SET_LIKED_ARTICLE_LIST: (state, likedList) => (state.likedArticleList = likedList),
//   },

//   actions: {
//     fetchArticles({ commit, getters }) {
//       /* 게시글 목록 받아오기
//       GET: articles URL (token)
//         drf.articles.articles()에 토큰을 주고 응답을 받는다.
//         성공하면
//           응답으로 받은 게시글들을 state.articles에 저장
//         실패하면
//           에러 메시지 표시
//       */
//       axios({
//         url: drf.articles.articles(),
//         method: 'get',
//         headers: getters.authHeader,
//       })
//         .then(res => commit('SET_ARTICLES', res.data))
//         .catch(err => console.error(err.response))
//     },

//     fetchArticle({ commit, getters }, articlePk) {
//       /* 단일 게시글 받아오기
//       GET: article URL (token)
//         articlePk를 인자로 drf.articles.article(articlePk)에서 응답을 받아온다.
//         성공하면
//           응답으로 받은 게시글들을 state.articles에 저장
//         실패하면
//           단순 에러일 때는
//             에러 메시지 표시
//           404 에러일 때는
//             NotFound404 로 이동
//       */
//       axios({
//         url: drf.articles.article(articlePk),
//         method: 'get',
//         headers: getters.authHeader,
//       })
//         .then(res => commit('SET_ARTICLE', res.data))
//         .catch(err => {
//           console.error(err.response)
//           if (err.response.status === 404) {
//             router.push({ name: 'NotFound404' })
//           }
//         })
//     },

//     createArticle({ commit, getters }, article) {
//       /* 게시글 생성
//       POST: articles URL (게시글 입력정보, token)
//         내가 쓴 게시글의 제목, 내용을 article 변수에 딕셔너리로 담아서
//         drf.articles.articles() 주소로 POST 하고 응답을 받는다.
//         성공하면
//           응답으로 받은 게시글을 state.article에 저장
//           ArticleDetailView 로 이동
//           인자로 방금 응답으로 받은 게시글의 내용과, 게시글의 고유키,
//           게시글의 댓글들, 게시글의 작성자, 그리고 좋아요는 False 상대로 전달한다.
//         실패하면
//           에러 메시지 표시
//       */
      
//       axios({
//         url: drf.articles.articles(),
//         method: 'post',
//         data: article,
//         headers: getters.authHeader,
//       })
//         .then(res => {
//           commit('SET_ARTICLE', res.data),
//           router.push({
//             name: 'article',
//             params: {article: getters.article, articlePk: getters.article.pk, articleComments: getters.article.comments, user: getters.article.user, isLiked: false }
//           })
//         })
//     },

//     updateArticle({ commit, getters }, { pk, title, content}) {
//       /* 게시글 수정
//       PUT: article URL (게시글 입력정보, token)
//         게시글의 고유키, 게시글의 제목, 게시글의 내용을 인자로 전달한다.
//         이후 drf.articles.article(pk)로부터 응답을 받는다.
//         성공하면
//           응답으로 받은 게시글을 state.article에 저장
//           ArticleDetailView 로 이동한다. 인자로는 게시글의 고유키를 전달한다.
//         실패하면
//           에러 메시지 표시
//       */
//       axios({
//         url: drf.articles.article(pk),
//         method: 'put',
//         data: { title, content },
//         headers: getters.authHeader,
//       })
//         .then(res => {
//           commit('SET_ARTICLE', res.data)
//           router.push({
//             name: 'article',
//             params: { articlePk: getters.article.pk }
//           })
//         })
//     },

//     deleteArticle({ commit, getters }, articlePk) {
//       /* 게시글 삭제
//       사용자가 확인을 받고
//         DELETE: article URL (token)
//           성공하면
//             state.article 비우기
//             AritcleListView로 이동
//           실패하면
//             에러 메시지 표시
//       */
      
//       if (confirm('정말 삭제하시겠습니까?')) {
//         axios({
//           url: drf.articles.article(articlePk),
//           method: 'delete',
//           headers: getters.authHeader,
//         })
//           .then(() => {
//             commit('SET_ARTICLE', {})
//             router.push({ name: 'community' })
//           })
//           .catch(err => console.error(err.response))
//       }
//     },

//     likeArticle({ commit, getters }, articlePk) {
//       /* 좋아요
//       POST: likeArticle URL(token)
//         게시글의 고유키를 인자로 drf.articles.likeArticle(articlePk)에 전달한다.
//         이후 응답을 받아서 state.article에 저장한다.
//         성공하면
//           state.article 갱신
//         실패하면
//           에러 메시지 표시
//       */
//       axios({
//         url: drf.articles.likeArticle(articlePk),
//         method: 'post',
//         headers: getters.authHeader,
//       })
//         .then(res => commit('SET_ARTICLE', res.data))
//         .catch(err => console.error(err.response))
//     },
    

// 		createComment({ commit, getters }, { articlePk, content }) {
//       /* 댓글 생성
//       POST: comments URL(댓글 입력 정보, token)
//         게시글 고유키와 내용을 받아
//         게시글 고유키를 drf.articles.comments(articlePk)의 인자로 전달하고
//         내용을 입력해서 응답을 받는다.
//         응답을 state.article의 key중 하나인 comments의 value로 저장한다.
//         성공하면
//           응답으로 state.article의 comments 갱신
//         실패하면
//           에러 메시지 표시
//       */
//       const comment = { content }

//       axios({
//         url: drf.articles.comments(articlePk),
//         method: 'post',
//         data: comment,
//         headers: getters.authHeader,
//       })
//         .then(res => {
//           commit('SET_ARTICLE_COMMENTS', res.data)
//         })
//         .catch(err => console.error(err.response))
//     },

//     updateComment({ commit, getters }, { articlePk, commentPk, content }) {
//       /* 댓글 수정
//       PUT: comment URL(댓글 입력 정보, token)
//         게시글의 고유값, 댓글의 고유값, 댓글 내용을 인자로 받아온다.
//         게시글의 고유값, 댓글의 고유값을 인자로 drf.articles.comment(articlePk, commentPk)에
//         댓글의 내용을 POST 해서 응답을 받는다.
//         성공하면
//           응답으로 state.article의 comments에 저장한다.
//         실패하면
//           에러 메시지 표시
//       */
//       const comment = { content }

//       axios({
//         url: drf.articles.comment(articlePk, commentPk),
//         method: 'put',
//         data: comment,
//         headers: getters.authHeader,
//       })
//         .then(res => {
//           commit('SET_ARTICLE_COMMENTS', res.data)
//         })
//         .catch(err => console.error(err.response))
//     },

//     deleteComment({ commit, getters }, { articlePk, commentPk }) {
//       /* 댓글 삭제
//       사용자가 확인을 받고
//         DELETE: comment URL (token)
//           게시글의 고유키, 댓글의 고유키를 인자로 받아와서
//           drf.articles.comment(articlePk, commentPk)의 인자로 넣고 
//           data에 {}을 넣고 응답을 받아온다.
//           성공하면
//             응답을 state.article의 comments 에 저장한다.
//           실패하면
//             에러 메시지 표시
//       */
//         if (confirm('정말 삭제하시겠습니까?')) {
//           axios({
//             url: drf.articles.comment(articlePk, commentPk),
//             method: 'delete',
//             data: {},
//             headers: getters.authHeader,
//           })
//             .then(res => {
//               commit('SET_ARTICLE_COMMENTS', res.data)
//             })
//             .catch(err => console.error(err.response))
//         }
//       },
      
//       // 삭제할 예정
//       toggleCommentLiked({ commit }){
//         commit('SET_COMMENT_LIKED')
//       },
//   },
// }
