<template>
    <div>
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
          </ul>

          <!-- 검색 버튼 -->
          <div class="d-flex justify-content-center align-items-center flex-wrap">

              <div class="nav-item active input-group">
                <input type="text" placeholder="영화 제목 검색" @keydown.enter.prevent="searchMovies" v-model.trim="search" class="form-control" style="width: 300px;" />
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
          </div>

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <!-- 퀴즈1 버튼 -->
            <li @click.prevent="Quiz1View" class="nav-item active">
              <a class="nav-link" href="">퀴즈1 <span class="sr-only"></span></a>
            </li>
            <!-- 퀴즈2 버튼 -->
            <li @click.prevent="Quiz2View" class="nav-item active">
              <a class="nav-link" href="">퀴즈2 <span class="sr-only"></span></a>
            </li>
            <!-- 내 정보 버튼 -->
            <li v-if="islogin" @click.prevent="MyProfileView" class="nav-item active">
              <a class="nav-link" href="">프로필 <span class="sr-only"></span></a>
            </li>
            <!-- 로그인 버튼 -->
            <li v-if="!islogin" @click.prevent="login" class="nav-item">
              <a class="nav-link" href="">로그인 <span class="sr-only"></span></a>
            </li>
            <!-- 로그아웃 버튼 -->
            <li v-if="islogin" @click.prevent="logout" class="nav-item">
              <a class="nav-link" href="">로그아웃 <span class="sr-only"></span></a>
            </li>
          </ul>

          <a class="navbar-brand ms-3" href=""><img @click.prevent="Home" style="width: 70px; height: 70px;" src="@/assets/stoplogo.png" alt=""></a>
          <button class="navbar-toggler border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
        </div>
      </div>

  </nav>
        
    </div>
</template>

<script>
export default {
    name : 'NoneView'
}
</script>

<style>

</style>