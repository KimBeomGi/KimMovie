// 백엔드의 주소를 저장해 둔 공간. 변수를 꺼내가서 사용하면 된다.
const HOST = 'http://localhost:8000/api/v1/'
const BASE_HOST = 'http://localhost:8000/'

const ACCOUNTS = 'accounts/'
const COMMENTS = 'comments/'
const COMMUNITY = 'communities/'
const MOVIES = 'movies/'
export default {
  accounts: {
    // 장고 내장 url들
    // 로그인, 로그아웃, 회원가입, 유저정보불러오기
    login: () => BASE_HOST + ACCOUNTS + 'login/',
    logout: () => BASE_HOST + ACCOUNTS + 'logout/',
    signup: () => BASE_HOST + ACCOUNTS + 'signup/',
    // Token 으로 현재 user 판단
    // currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    currentUserInfo: () => BASE_HOST + ACCOUNTS + 'user/',
    // username으로 프로필 제공
    profile: (username) => HOST + ACCOUNTS + 'profile/' + username +'/',
    follow: userPk => HOST + ACCOUNTS + userPk +'/' + 'follow/',
    followMovies: moviePk => BASE_HOST + MOVIES + moviePk + '/' + 'moviefollow/',
    reviews: moviePk => BASE_HOST + MOVIES + moviePk + '/' + 'reviews/', // 전체 게시글 목록 조회, 게시글 create
    review: (moviePk, reviewPk) => BASE_HOST + MOVIES + moviePk + '/' + 'reviews/'+reviewPk + '/', // 게시글 상세 조회, 게시글 삭제, 게시글 수정 
    likeReview: (moviePk, reviewPk) => BASE_HOST + MOVIES + moviePk + '/' + 'reviews/'+reviewPk + '/'+'like/', // 게시글 좋아요

  },
  articles: {
    // /articles/
    // articles: () => BASE_HOST + COMMUNITY,
    articles: () => BASE_HOST + COMMUNITY,
    // /articles/1/
    article: articlePk => BASE_HOST + COMMUNITY + `${articlePk}/`,
    likeArticle: articlePk => BASE_HOST + COMMUNITY + `${articlePk}/` + 'like/',
    comments: articlePk => BASE_HOST + COMMUNITY + `${articlePk}/` + COMMENTS,
    comment: (articlePk, commentPk) =>
    BASE_HOST + COMMUNITY + `${articlePk}/` + COMMENTS + `${commentPk}/`,
  }
}