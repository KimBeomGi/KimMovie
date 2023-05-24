<template>
  <div style="background-color: black; position: relative;">
    <h1 style="text-align: start;">지금 뜨는 콘텐츠</h1>
    <vue-slick-carousel
      v-bind="carouselSettings"
    >
    <template #prevArrow>
      <button class="arrow-button left" @click="$refs.carousel.prev()">
          <i class="fa fa-chevron-left"></i>
        </button>
    </template>
      <div v-for="moviecard in cards" :key="moviecard.id" class="card space" style="background-color: black;">
        <div class="content-wrapper mx-3">
          <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
        </div>
        <div class="card-body"></div>
      </div>
      <template #nextArrow>
        <button class="arrow-button right" @click="$refs.carousel.next()">
      <i class="fa fa-chevron-right"></i>
    </button>
    </template>
    </vue-slick-carousel>
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
      slidesToShow: 2,
      carouselSettings : {
        "centerMode": true,
        "centerPadding": "20px",
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 7,
        "speed": 500
      }
    }
  },
  computed: {
    cards() {
      return this.$store.state.cards
    },
    
  },
  created() {
    this.getCards()
  },
  methods: {
    goMovieDetailView(moviecard) {
      this.$router.push({ name: 'MovieDetailView', params: { id: moviecard.id }})
    },
    getCards() {
      this.$store.dispatch('getCards')
    },
    updateSlidesToShow() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 580) {
        this.carouselSettings.slidesToShow = 2;
      } else {
        this.carouselSettings.slidesToShow = Math.floor(windowWidth / 290);
      }
    },
  },
  mounted() {    
    this.updateSlidesToShow();
    window.addEventListener('resize', this.updateSlidesToShow);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlidesToShow);
  },
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.card-body {
  background-color: transparent;
}
/* .arrow-button {
  height: 50%;
  width: auto;
} */

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
  background-color: blue;
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