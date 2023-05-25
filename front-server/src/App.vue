<template>
  <div id="app" >
    <div id="content">    <!-- footer 추가시키려고 추가생성함 -->
    <div class="box"></div>
    <nav class="navbar navbar-expand-xl navbar-dark" style="background-color: black; height: 90px;">
      <div class="container-fluid">
        <!-- logo 버튼 -->
        <a class="navbar-brand" href=""><img @click.prevent="Home" style="width: 70px; height: 70px;" src="@/assets/Kim Movie.png" alt=""></a>
        <button class="navbar-toggler border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- Home 버튼 -->
            <li @click.prevent="Home" class="nav-item active">
              <a class="nav-link font_Sunflower" href="">Home <span class="sr-only"></span></a>
            </li>
            <!-- Community 버튼 -->
            <li @click.prevent="Community" class="nav-item active">
              <a class="nav-link font_Sunflower" href="">게시판 <span class="sr-only"></span></a>
            </li>
            <!-- AnonymousCommunityView 버튼 -->
            <li @click.prevent="AnonymousCommunityView" class="nav-item active">
              <a class="nav-link font_Sunflower" href="">익명게시판 <span class="sr-only"></span></a>
            </li>
          </ul>

          <!-- 검색 버튼 -->
          <div class="d-flex justify-content-center align-items-center flex-wrap">

              <div class="nav-item active input-group">
                <input type="text" placeholder="🔍영화 제목 검색" @keydown.enter.prevent="searchMovies" v-model.trim="search" class="form-control" />
              </div>
          </div>

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <!-- 퀴즈1 버튼 -->
            <li @click.prevent="Quiz1View" class="nav-item active">
              <a class="nav-link font_Sunflower" href="">퀴즈1 <span class="sr-only"></span></a>
            </li>
            <!-- 퀴즈2 버튼 -->
            <li @click.prevent="Quiz2View" class="nav-item active">
              <a class="nav-link font_Sunflower" href="">퀴즈2 <span class="sr-only"></span></a>
            </li>
            <!-- 내 정보 버튼 -->
            <li v-if="islogin" @click.prevent="MyProfileView" class="nav-item active">
              <a class="nav-link font_Sunflower" href="">프로필 <span class="sr-only"></span></a>
            </li>
            <!-- 로그인 버튼 -->
            <li v-if="!islogin" @click.prevent="login" class="nav-item">
              <a class="nav-link font_Sunflower" href="">로그인 <span class="sr-only"></span></a>
            </li>
            <!-- 로그아웃 버튼 -->
            <li v-if="islogin" @click.prevent="logout" class="nav-item">
              <a class="nav-link font_Sunflower" href="">로그아웃 <span class="sr-only"></span></a>
            </li>
          </ul>

          <a class="navbar-brand ms-3" href=""><img @click.prevent="Home" style="width: 70px; height: 70px;" src="@/assets/stoplogo.png" alt=""></a>
          <button  class="navbar-toggler border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
        </div>
      </div>
    </nav>

    <router-view style="margin-top: 60px;"/>
    </div>

    <!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  -->
    <!-- footer -->
    <footer class="footer border-top border-white mt-3">
    <!-- <footer> -->
      <FooterView/>
    </footer>
    <!-- <p class="mb-3">MADE BY KIMS</p> -->

  </div>
</template>



<script>
import FooterView from '@/components/FooterView.vue'
export default {
  components : {
    FooterView,
  },
  data(){
    return{
      search : ''
    }
  },
  computed:{
    islogin(){
      return this.$store.getters.isLogin
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
    MyProfileView() {
      if (this.$route.name !== 'MyProfileView') {
      this.$router.push({ name: 'MyProfileView' }); // 회원가입 라우터링크로 이동
    }},
    Quiz1View() {
      if (this.$route.name !== 'Quiz1View') {
        alert('맞추면 100포인트를 얻고 틀리면 50포인트를 잃습니다!')
      this.$router.push({ name: 'Quiz1View' }); // 회원가입 라우터링크로 이동
    }},
    Quiz2View() {
      if (this.$route.name !== 'Quiz2View') {
        alert('맞추면 100포인트를 얻고 틀리면 50포인트를 잃습니다!')
      this.$router.push({ name: 'Quiz2View' }); // 회원가입 라우터링크로 이동
    }},
    
    searchMovies(){
      if (this.$route.name !== 'HomeView'){
      this.$router.push({ name: 'HomeView' })}
      this.$nextTick(() => {
    this.$router.push({ name: 'SearchMoviesView', params: { query: this.search } })
    this.search = ''
  })
    },
  },
}
</script>

<style scoped>

@media (max-width: 1200px) {
  .input-group {
    width: 100px;
  }
}

@media (min-width: 601px) and (max-width: 1300px) {
  .input-group {
    width: 300px;
  }
}

@media (min-width: 1301px) {
  .input-group {
    width: 400px;
  }
}


.font_Sunflower{
  font-family: 'Sunflower', sans-serif;
}

.box{
  height: 80px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: black;
  min-height: 100vh;   /* footer 하단에 고정하려고 추가함  */
  display: flex;
  flex-direction: column;
}

nav a {
  font-weight: bold;
  color: red;
  
}

.navbar-collapse {
  background-color: black;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button{
	width:80px;
	height: 30px;
	color:#fff;
	background: red;
	font-size: 16px;
	border:none;
	border-radius: 20px;
	box-shadow: 0 4px 16px rgba(100, 4, 12, 0.9);
	transition:0.3s;
  margin-left: 10px;
}
button:focus {
	outline:0;
}
button:hover{
	background: rgba(100, 4, 12, 0.9);
	cursor: pointer;
	box-shadow: 0 2px 4px rgba(100, 4, 12, 0.9);
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

.navbar-brand img {
  width: 120px;
  height: 120px;
}

.navbar-nav .nav-link {
  font-size: 24px;
}

/* footer 하단에 고정하려고 추가함  */
html, body {
  height: 100%;
}

.footer {
  left: 0;
  bottom: 0;
  width: 100%;
}
#content {
  flex-grow: 1;
}
/* 여기까지 footer때문에 이용했음 */
</style>
