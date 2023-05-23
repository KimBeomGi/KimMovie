<template>
  <div style="background-color: black;">
    
    <h1 style="text-align: start;"> 당신을 위한 맞춤 추천</h1>
    <div class="card-container">
      <button class="arrow-button left" @click="moveLeft_custom">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="card-wrapper">
        <div class="card-row" :style="{ transform: `translateX(${translateX_custom}px)` }"> <!-- 수정 -->
          <div v-for="moviecard in cards_custom" :key="moviecard.id" class="card space" style="width: 18rem; background-color: black;">
            <img @click="goMovieDetailView(moviecard)" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
            <div class="card-body ">
            </div>
          </div>
        </div>
      </div>
      <button class="arrow-button right" @click="moveRight_custom">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendForYou',
  data() {
    return {
      translateX_custom: 0, // 10770-TV 영화
      ///////////////////////////////////////////////////////////////////////////////
      cardWidth: 200,
      containerWidth: 0,
    }
  },
  computed: {
    ///////////////////////////////////////////////////////////////////////////////
    cards_custom() {
      return this.$store.state.genre_cards
    },
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
    this.getGenrecards()
  },
  methods: {
    goMovieDetailView(moviecard) {
      this.$router.push({ name: 'MovieDetailView', params: { id: moviecard.id }})
    },
    moveRight_custom() {
      const maxTranslate = this.containerWidth - this.cardWidth * this.cards_custom.length
      if (this.translateX_custom > maxTranslate + this.cardWidth * 11 ) {
        this.translateX_custom -= this.cardWidth*7
      }
    },
    moveLeft_custom() {
      if (this.translateX_custom < 0) {
        this.translateX_custom += this.cardWidth*7
      }
    },

    ///////////////////////////////////////////////////
    getGenrecards() {
      this.$store.dispatch('getGenrecards')
    },

    /////////////////////////////////////////
  },
}
</script>