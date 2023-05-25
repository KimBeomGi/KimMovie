<template>
  <div style="background-color: black; position: relative;">
    <!-- 12-모험 -->
    <h2 class="font_NanumBrush" style="text-align: start;">모험🧳</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards12" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 14-판타지 -->
    <h2 class="font_NanumBrush" style="text-align: start;">판타지🧙</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards14" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 16-애니메이션 -->
    <h2 class="font_NanumBrush" style="text-align: start;">애니메이션📚</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards16" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 18-드라마 -->
    <h2 class="font_NanumBrush" style="text-align: start;">드라마🏃🏻</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards18" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 27-공포 -->
    <h2 class="font_NanumBrush" style="text-align: start;">공포😱</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards27" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 28-액션 -->
    <h2 class="font_NanumBrush" style="text-align: start;">액션⚔️</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards28" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 35-코미디 -->
    <h2 class="font_NanumBrush" style="text-align: start;">코미디😆</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards35" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 36-역사 -->
    <h2 class="font_NanumBrush" style="text-align: start;">역사🏛️</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards36" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 37-서부 -->
    <h2 class="font_NanumBrush" style="text-align: start;">서부🤠</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards37" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 53-스릴러 -->
    <h2 class="font_NanumBrush" style="text-align: start;">스릴러😨</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards53" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 80-범죄 -->
    <h2 class="font_NanumBrush" style="text-align: start;">범죄🚓</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards80" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 99-다큐멘터리 -->
    <h2 class="font_NanumBrush" style="text-align: start;">다큐멘터리📹️</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards99" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 878-SF -->
    <h2 class="font_NanumBrush" style="text-align: start;">SF🛰️</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards878" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 9648-미스터리 -->
    <h2 class="font_NanumBrush" style="text-align: start;">미스터리🕵️</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards9648" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 10402-음악 -->
    <h2 class="font_NanumBrush" style="text-align: start;">음악🎵</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards10402" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 10749-로맨스 -->
    <h2 class="font_NanumBrush" style="text-align: start;">로맨스❤️</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards10749" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 10751-가족 -->
    <h2 class="font_NanumBrush" style="text-align: start;">가족👪️</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards10751" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 10752-전쟁 -->
    <h2 class="font_NanumBrush" style="text-align: start;">전쟁🎖️</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards10752" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
    <!-- 10770-TV 영화 -->
    <h2 class="font_NanumBrush" style="text-align: start;">TV 영화📺️</h2>
    <vue-slick-carousel
      v-bind="carouselSettings">
    <template #prevArrow>
      <button class="arrow-button left rounded-4" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards10770" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        
        <button class="arrow-button right rounded-4" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>

    <!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  -->
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

export default {
  name: 'RecommendForYou',
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      carouselSettings: {
        centerMode: true,
        centerPadding: '20px',
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 7,
        speed: 500,
      },
    };
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
  created() {
    ///////////////////////////////////////////////////////////////////////////////
    this.getGenrecards()
    
    ///////////////////////////////////////////////////////////////////////////////
  },
  methods: {
    goMovieDetailView(moviecard) {
      this.$router.push({ name: 'MovieDetailView', params: { id: moviecard.id }});
    },  
    updateSlidesToShow() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 580) {
        this.carouselSettings.slidesToShow = 2;
      } else {
        this.carouselSettings.slidesToShow = Math.floor(windowWidth / 290);
      }
    },
    ////////////////////////////////////////////////////////////////////////////////
    // 12-모험
    getGenrecards() {
      this.$store.dispatch('getGenrecards')
    },
    //////////////////////////////////////////////////////////////////////////////////////////
  },
  mounted() {
    this.updateSlidesToShow();
    window.addEventListener('resize', this.updateSlidesToShow);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlidesToShow);
  },
};
</script>

<style scoped>
  .font_NanumBrush{
    font-family: 'Nanum Brush Script', cursive;
  }

  h1{
    padding-left: 35px;
  }
  h2{
    padding-left: 35px;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  .card-body {
    background-color: transparent;
  }

  .card-container {
    position: relative;
    overflow: hidden;
  }

  .card-wrapper {
    display: flex;
    transition: transform 0.3s;
    z-index: 1; /* 카드를 화살표 위에 올리기 위해 z-index 설정 */
  }

  .card-row {
    display: flex;
    flex-wrap: nowrap;
  }

  .arrow-button {
    height: 50%;
    width: auto;
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    color: white;
    background-color: black;
    z-index: 2;
    opacity: 0.8; /* 기본적으로 버튼을 투명하게 설정 */
    transition: opacity 0.3s; /* 마우스 호버 시 투명도 변화를 부드럽게 설정 */
  }

  .arrow-button:hover {
    opacity: 1; /* 마우스 호버 시 투명도를 1로 설정하여 버튼이 더욱 뚜렷하게 보이도록 함 */
    background-color: red;
  }

  .left {
    left: 10px;
  }

  .right {
    right: 10px;
  }

  .fa-chevron-left,
  .fa-chevron-right {
    font-size: 24px;
  }
</style>