<template>
  <div id="app" >
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: black;">
      <div class="container-fluid" >
      <!-- logo 버튼 -->
      <a class="navbar-brand" href=""><img @click.prevent="Home" style="width: 60px; height: 60px;" src="@/assets/Kim Movie.png" alt=""></a>
      <button class="navbar-toggler border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- Home 버튼 -->
        <li @click.prevent="Home" class="nav-item active">
          <a class="nav-link" href="">Home <span class="sr-only"></span></a>
        </li>
        <!-- Community 버튼 -->
        <li @click.prevent="Community" class="nav-item active">
          <a class="nav-link" href="">게시판 <span class="sr-only"></span></a>
        </li>           
        <!-- AnonymousCommunityView 버튼 -->
        <li @click.prevent="AnonymousCommunityView" class="nav-item active">
          <a class="nav-link" href="">익명게시판 <span class="sr-only"></span></a>
        </li>           
        <!-- Login 버튼 -->
        
        <li @click.prevent="login" class="nav-item active">
          <a class="nav-link" href="">Login <span class="sr-only"></span></a>
        </li>   
        <!-- Logout 버튼 -->
        <li @click.prevent="logout" class="nav-item active">
          <a class="nav-link" href="">Logout <span class="sr-only"></span></a>
        </li>   
        <!-- signup 버튼 -->
        <li @click.prevent="signup" class="nav-item active">
          <a class="nav-link" href="">signup <span class="sr-only"></span></a>
        </li>    
        <!-- 검색 버튼 -->
        <li class="nav-item active">
  <input type="text" placeholder="영화 제목 검색" @keydown.enter.prevent="searchMovies" 
  v-model.trim="search"/>
</li>
        </ul>
      </div>
    </div>
  </nav>
    <router-view style="margin-top: 60px;"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      search : ''
    }
  },
  methods: {
    Home() {
      if (this.$route.name !== 'HomeView') {
      this.$router.push({ name: 'HomeView' }); //  홈 라우터링크로 이동
    }},
    Community() {
      if (this.$route.name !== 'CommunityView') {
      this.$router.push({ name: 'CommunityView' }); // 커뮤니티라우터링크로 이동
    }},
    AnonymousCommunityView() {
      if (this.$route.name !== 'AnonymousCommunityView') {
      this.$router.push({ name: 'AnonymousCommunityView' }); // AnonymousCommunityView라우터링크로 이동
    }},
    login() {
      if (this.$route.name !== 'LogInView') {
      this.$router.push({ name: 'LogInView' }); // 로그인 라우터링크로 이동
    }},
    logout() {
      if (this.$route.name !== 'LogOutView') {
      this.$router.push({ name: 'LogOutView' }); // 로그아웃 라우터링크로 이동
    }},
    signup() {
      if (this.$route.name !== 'SignUpView') {
      this.$router.push({ name: 'SignUpView' }); // 회원가입 라우터링크로 이동
    }},
    searchMovies(){
      this.$router.push({ name: 'NoneView' })
      this.$nextTick(() => {
    this.$router.push({ name: 'SearchMoviesView', params: { query: this.search } })
    this.search = ''
  })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: black;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  
}

nav a.router-link-exact-active {
  color: #42b983;
}

button{
	width:80px;
	height: 30px;
	color:#fff;
	background: #004fff;
	font-size: 16px;
	border:none;
	border-radius: 20px;
	box-shadow: 0 4px 16px rgba(0,79,255,0.3);
	transition:0.3s;
  margin-left: 10px;
}
button:focus {
	outline:0;
}
button:hover{
	background: rgba(0,79,255,0.9);
	cursor: pointer;
	box-shadow: 0 2px 4px rgba(0,79,255,0.6);
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: top 0.3s;
  height: 60px;
}

.navbar.scrolled {
  top: -100px;
}
</style>
