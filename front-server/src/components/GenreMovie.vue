<template>
  <div style="background-color: black;">
    <!-- 12-모험 -->
    <h1 style="text-align: start;"> 모험</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft12">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX12}px)` }"> <!-- 수정 -->
          <div v-for="moviecard in cards12" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body ">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight12">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 14-판타지 -->
    <h1 style="text-align: start;"> 판타지</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft14">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX14}px)` }"> <!-- 수정 -->
          <div v-for="moviecard in cards14" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body ">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight14">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 16-애니메이션 -->
    <h1 style="text-align: start;">애니메이션</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft16">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX16}px)` }">
          <div v-for="moviecard in cards16" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight16">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 18-드라마 -->
    <h1 style="text-align: start;">드라마</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft18">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX18}px)` }">
          <div v-for="moviecard in cards18" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight18">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 27-공포 -->
    <h1 style="text-align: start;">공포</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft27">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX27}px)` }">
          <div v-for="moviecard in cards27" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight27">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 28-액션 -->
    <h1 style="text-align: start;">액션</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft28">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX28}px)` }">
          <div v-for="moviecard in cards28" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight28">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 35-코미디 -->
    <h1 style="text-align: start;">코미디</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft35">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX35}px)` }">
          <div v-for="moviecard in cards35" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight35">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 36-역사 -->
    <h1 style="text-align: start;">역사</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft36">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX36}px)` }">
          <div v-for="moviecard in cards36" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight36">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 37-서부 -->
    <h1 style="text-align: start;">서부</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft37">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX37}px)` }">
          <div v-for="moviecard in cards37" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight37">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 53-스릴러 -->
    <h1 style="text-align: start;">스릴러</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft53">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX53}px)` }">
          <div v-for="moviecard in cards53" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight53">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 80-범죄 -->
    <h1 style="text-align: start;">범죄</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft80">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX80}px)` }">
          <div v-for="moviecard in cards80" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight80">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 99-다큐멘터리 -->
    <h1 style="text-align: start;">다큐멘터리</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft99">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX99}px)` }">
          <div v-for="moviecard in cards99" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight99">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 878-SF -->
    <h1 style="text-align: start;">SF</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft878">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX878}px)` }">
          <div v-for="moviecard in cards878" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight878">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 9648-미스터리 -->
    <h1 style="text-align: start;">미스터리</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft9648">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX9648}px)` }">
          <div v-for="moviecard in cards9648" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight9648">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 10402-음악 -->
    <h1 style="text-align: start;">음악</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft10402">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX10402}px)` }">
          <div v-for="moviecard in cards10402" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight10402">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 10749-로맨스 -->
    <h1 style="text-align: start;">로맨스</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft10749">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX10749}px)` }">
          <div v-for="moviecard in cards10749" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight10749">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 10751-가족 -->
    <h1 style="text-align: start;">가족</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft10751">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX10751}px)` }">
          <div v-for="moviecard in cards10751" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight10751">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 10752-로맨스 -->
    <h1 style="text-align: start;">전쟁</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft10752">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX10752}px)` }">
          <div v-for="moviecard in cards10752" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight10752">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
    <!-- 10770-로맨스 -->
    <h1 style="text-align: start;">TV 영화</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft10770">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX10770}px)` }">
          <div v-for="moviecard in cards10770" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight10770">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenreMovie',
  data() {
    return {
      ///////////////////////////////////////////////////////////////////////////////
      translateX12: 0, // 12-모험
      translateX14: 0, // 14-판타지
      translateX16: 0, // 16-애니메이션
      translateX18: 0, // 18-드라마
      translateX27: 0, // 27-공포
      translateX28: 0, // 28-액션
      translateX35: 0, // 35-코미디
      translateX36: 0, // 36-역사
      translateX37: 0, // 37-서부
      translateX53: 0, // 53-스릴러
      translateX80: 0, // 80-범죄
      translateX99: 0, // 99-다큐멘터리
      translateX878: 0, // 878-SF
      translateX9648: 0, // 9648-미스터리
      translateX10402: 0, // 10402-음악
      translateX10749: 0, // 10749-로맨스
      translateX10751: 0, // 10751-가족
      translateX10752: 0, // 10752-전쟁
      translateX10770: 0, // 10770-TV 영화
      ///////////////////////////////////////////////////////////////////////////////
      cardWidth: 200,
      containerWidth: 0,
    }
  },
  computed: {
    ///////////////////////////////////////////////////////////////////////////////
    cards12() {                               // 12-모험
      return this.$store.state.genre_cards12
    },
    cards14() {                               // 14-판타지
      return this.$store.state.genre_cards14
    },
    cards16() {                               // 16-애니메이션
      return this.$store.state.genre_cards16
    },
    cards18() {                               // 18-드라마
      return this.$store.state.genre_cards18
    },
    cards27() { // 27-공포
      return this.$store.state.genre_cards27
    },
    cards28() { // 28-액션
      return this.$store.state.genre_cards28
    },
    cards35() { // 35-코미디
      return this.$store.state.genre_cards35
    },
    cards36() { // 36-역사
      return this.$store.state.genre_cards36
    },
    cards37() { // 37-서부
      return this.$store.state.genre_cards37
    },
    cards53() { // 53-스릴러
      return this.$store.state.genre_cards53
    },
    cards80() { // 80-범죄
      return this.$store.state.genre_cards80
    },
    cards99() { // 99-다큐멘터리
      return this.$store.state.genre_cards99
    },
    cards878() { // 878-SF
      return this.$store.state.genre_cards878
    },
    cards9648() { // 9648-미스터리
      return this.$store.state.genre_cards9648
    },
    cards10402() { // 10402-음악
      return this.$store.state.genre_cards10402
    },
    cards10749() { // 10749-로맨스
      return this.$store.state.genre_cards10749
    },
    cards10751() { // 10751-가족
      return this.$store.state.genre_cards10751
    },
    cards10752() { // 10752-전쟁
      return this.$store.state.genre_cards10752
    },
    cards10770() { // 10770-TV 영화
      return this.$store.state.genre_cards10770
    },
    ///////////////////////////////////////////////////////////////////////////////
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.cardWrapper) {
        this.containerWidth = this.$refs.cardWrapper.offsetWidth
      }
    })
  },
  created() {
    // 화면이 켜지면 getArticles 메서드를 실행한다.
    ///////////////////////////////////////////////////////////////////////////////
    this.getGenrecards12()   // 12-모험
    this.getGenrecards14()   // 14-판타지
    this.getGenrecards16()   // 16-애니메이션
    this.getGenrecards18()   // 18-드라마
    this.getGenrecards27()   // 27-공포
    this.getGenrecards28()   // 28-액션
    this.getGenrecards35()   // 35-코미디
    this.getGenrecards36()   // 36-역사
    this.getGenrecards37()   // 37-서부
    this.getGenrecards53()   // 53-스릴러
    this.getGenrecards80()   // 80-범죄
    this.getGenrecards99()   // 99-다큐멘터리
    this.getGenrecards878()  // 878-SF
    this.getGenrecards9648() // 9648-미스터리
    this.getGenrecards10402()  // 10402-음악
    this.getGenrecards10749()  // 10749-로맨스
    this.getGenrecards10751()  // 10751-가족
    this.getGenrecards10752()  // 10752-전쟁
    this.getGenrecards10770()  // 10770-TV 영화
    ///////////////////////////////////////////////////////////////////////////////
  },
  methods: {
    goMovieDetailView(moviecard) {
      this.$router.push({ name: 'MovieDetailView', params: { id: moviecard.id }})
    },
    ////////////////////////////////////////////////////////////////////////////////
    // 12-모험
    moveRight12() {
      const maxTranslate = this.containerWidth - this.cardWidth * this.cards12.length
      if (this.translateX12 > maxTranslate + this.cardWidth * 11 ) {
        this.translateX12 -= this.cardWidth*7
      }
    },
    moveLeft12() {
      if (this.translateX12 < 0) {
        this.translateX12 += this.cardWidth*7
      }
    },
    // 14-판타지
    moveRight14() {
      const maxTranslate = this.containerWidth - this.cardWidth * this.cards14.length
      if (this.translateX14 > maxTranslate + this.cardWidth * 11 ) {
        this.translateX14 -= this.cardWidth*7
      }
    },
    moveLeft14() {
      if (this.translateX14 < 0) {
        this.translateX14 += this.cardWidth*7
      }
    },
    // 16-애니메이션
    moveRight16() {
      const maxTranslate = this.containerWidth - this.cardWidth * this.cards16.length
      if (this.translateX16 > maxTranslate + this.cardWidth * 11 ) {
        this.translateX16 -= this.cardWidth*7
      }
    },
    moveLeft16() {
      if (this.translateX16 < 0) {
        this.translateX16 += this.cardWidth*7
      }
    },
    // 18-드라마
    moveRight18() {
      const maxTranslate = this.containerWidth - this.cardWidth * this.cards18.length
      if (this.translateX18 > maxTranslate + this.cardWidth * 11 ) {
        this.translateX18 -= this.cardWidth*7
      }
    },
    moveLeft18() {
      if (this.translateX18 < 0) {
        this.translateX18 += this.cardWidth*7
      }
    },
    // 27-공포
    moveRight27() {
      const maxTranslate27 = this.containerWidth - this.cardWidth * this.cards27.length
      if (this.translateX27 > maxTranslate27 + this.cardWidth * 11) {
        this.translateX27 -= this.cardWidth * 7
      }
    },
    moveLeft27() {
      if (this.translateX27 < 0) {
        this.translateX27 += this.cardWidth * 7
      }
    },
    // 28-액션
    moveRight28() {
      const maxTranslate28 = this.containerWidth - this.cardWidth * this.cards28.length
      if (this.translateX28 > maxTranslate28 + this.cardWidth * 11) {
        this.translateX28 -= this.cardWidth * 7
      }
    },
    moveLeft28() {
      if (this.translateX28 < 0) {
        this.translateX28 += this.cardWidth * 7
      }
    },
    // 35-코미디
    moveRight35() {
      const maxTranslate35 = this.containerWidth - this.cardWidth * this.cards35.length
      if (this.translateX35 > maxTranslate35 + this.cardWidth * 11) {
        this.translateX35 -= this.cardWidth * 7
      }
    },
    moveLeft35() {
      if (this.translateX35 < 0) {
        this.translateX35 += this.cardWidth * 7
      }
    },
    // 36-역사
    moveRight36() {
      const maxTranslate36 = this.containerWidth - this.cardWidth * this.cards36.length
      if (this.translateX36 > maxTranslate36 + this.cardWidth * 11) {
        this.translateX36 -= this.cardWidth * 7
      }
    },
    moveLeft36() {
      if (this.translateX36 < 0) {
        this.translateX36 += this.cardWidth * 7
      }
    },
    // 37-서부
    moveRight37() {
      const maxTranslate37 = this.containerWidth - this.cardWidth * this.cards37.length
      if (this.translateX37 > maxTranslate37 + this.cardWidth * 11) {
        this.translateX37 -= this.cardWidth * 7
      }
    },
    moveLeft37() {
      if (this.translateX37 < 0) {
        this.translateX37 += this.cardWidth * 7
      }
    },
    // 53-스릴러
    moveRight53() {
      const maxTranslate53 = this.containerWidth - this.cardWidth * this.cards53.length
      if (this.translateX53 > maxTranslate53 + this.cardWidth * 11) {
        this.translateX53 -= this.cardWidth * 7
      }
    },
    moveLeft53() {
      if (this.translateX53 < 0) {
        this.translateX53 += this.cardWidth * 7
      }
    },
    // 80-범죄
    moveRight80() {
      const maxTranslate80 = this.containerWidth - this.cardWidth * this.cards80.length
      if (this.translateX80 > maxTranslate80 + this.cardWidth * 11) {
        this.translateX80 -= this.cardWidth * 7
      }
    },
    moveLeft80() {
      if (this.translateX80 < 0) {
        this.translateX80 += this.cardWidth * 7
      }
    },
    // 99-다큐멘터리
    moveRight99() {
      const maxTranslate99 = this.containerWidth - this.cardWidth * this.cards99.length
      if (this.translateX99 > maxTranslate99 + this.cardWidth * 11) {
        this.translateX99 -= this.cardWidth * 7
      }
    },
    moveLeft99() {
      if (this.translateX99 < 0) {
        this.translateX99 += this.cardWidth * 7
      }
    },
    // 878-SF
    moveRight878() {
      const maxTranslate878 = this.containerWidth - this.cardWidth * this.cards878.length
      if (this.translateX878 > maxTranslate878 + this.cardWidth * 11) {
        this.translateX878 -= this.cardWidth * 7
      }
    },
    moveLeft878() {
      if (this.translateX878 < 0) {
        this.translateX878 += this.cardWidth * 7
      }
    },
    // 9648-미스터리
    moveRight9648() {
      const maxTranslate9648 = this.containerWidth - this.cardWidth * this.cards9648.length
      if (this.translateX9648 > maxTranslate9648 + this.cardWidth * 11) {
        this.translateX9648 -= this.cardWidth * 7
      }
    },
    moveLeft9648() {
      if (this.translateX9648 < 0) {
        this.translateX9648 += this.cardWidth * 7
      }
    },
    // 10402-음악
    moveRight10402() {
      const maxTranslate10402 = this.containerWidth - this.cardWidth * this.cards10402.length
      if (this.translateX10402 > maxTranslate10402 + this.cardWidth * 11) {
        this.translateX10402 -= this.cardWidth * 7
      }
    },
    moveLeft10402() {
      if (this.translateX10402 < 0) {
        this.translateX10402 += this.cardWidth * 7
      }
    },
    // 10749-로맨스
    moveRight10749() {
      const maxTranslate10749 = this.containerWidth - this.cardWidth * this.cards10749.length
      if (this.translateX10749 > maxTranslate10749 + this.cardWidth * 11) {
        this.translateX10749 -= this.cardWidth * 7
      }
    },
    moveLeft10749() {
      if (this.translateX10749 < 0) {
        this.translateX10749 += this.cardWidth * 7
      }
    },
    // 10751-가족
    moveRight10751() {
      const maxTranslate10751 = this.containerWidth - this.cardWidth * this.cards10751.length
      if (this.translateX10751 > maxTranslate10751 + this.cardWidth * 11) {
        this.translateX10751 -= this.cardWidth * 7
      }
    },
    moveLeft10751() {
      if (this.translateX10751 < 0) {
        this.translateX10751 += this.cardWidth * 7
      }
    },
    // 10752-전쟁
    moveRight10752() {
      const maxTranslate10752 = this.containerWidth - this.cardWidth * this.cards10752.length
      if (this.translateX10752 > maxTranslate10752 + this.cardWidth * 11) {
        this.translateX10752 -= this.cardWidth * 7
      }
    },
    moveLeft10752() {
      if (this.translateX10752 < 0) {
        this.translateX10752 += this.cardWidth * 7
      }
    },
    // 10770-TV 영화
    moveRight10770() {
      const maxTranslate10770 = this.containerWidth - this.cardWidth * this.cards10770.length
      if (this.translateX10770 > maxTranslate10770 + this.cardWidth * 11) {
        this.translateX10770 -= this.cardWidth * 7
      }
    },
    moveLeft10770() {
      if (this.translateX10770 < 0) {
        this.translateX10770 += this.cardWidth * 7
      }
    },
    ////////////////////////////////////////////////////////////////////////////////




    ///////////////////////////////////////////////////
    // 12-모험
    getGenrecards12() {
      this.$store.dispatch('getGenrecards12')
    },
    // 14-판타지
    getGenrecards14() {
      this.$store.dispatch('getGenrecards14')
    },
    // 16-애니메이션
    getGenrecards16() {
      this.$store.dispatch('getGenrecards16')
    },
    // 18-드라마
    getGenrecards18() {
      this.$store.dispatch('getGenrecards18')
    },
    // 27-공포
    getGenrecards27() {
      this.$store.dispatch('getGenrecards27')
    },
    // 28-액션
    getGenrecards28() {
      this.$store.dispatch('getGenrecards28')
    },
    // 35-코미디
    getGenrecards35() {
      this.$store.dispatch('getGenrecards35')
    },
    // 36-역사
    getGenrecards36() {
      this.$store.dispatch('getGenrecards36')
    },
    // 37-서부
    getGenrecards37() {
      this.$store.dispatch('getGenrecards37')
    },
    // 53-스릴러
    getGenrecards53() {
      this.$store.dispatch('getGenrecards53')
    },
    // 80-범죄
    getGenrecards80() {
      this.$store.dispatch('getGenrecards80')
    },
    // 99-다큐멘터리
    getGenrecards99() {
      this.$store.dispatch('getGenrecards99')
    },
    // 878-SF
    getGenrecards878() {
      this.$store.dispatch('getGenrecards878')
    },
    // 9648-미스터리
    getGenrecards9648() {
      this.$store.dispatch('getGenrecards9648')
    },
    // 10402-음악
    getGenrecards10402() {
      this.$store.dispatch('getGenrecards10402')
    },
    // 10749-로맨스
    getGenrecards10749() {
      this.$store.dispatch('getGenrecards10749')
    },
    // 10751-가족
    getGenrecards10751() {
      this.$store.dispatch('getGenrecards10751')
    },
    // 10752-전쟁
    getGenrecards10752() {
      this.$store.dispatch('getGenrecards10752')
    },
    // 10770-TV 영화
    getGenrecards10770() {
      this.$store.dispatch('getGenrecards10770')
    },
    /////////////////////////////////////////
  },
  
}
</script>
