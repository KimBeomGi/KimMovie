<template>
  <div class="card-container">
    <button class="arrow-button left" @click="moveLeft">
      <i class="fa fa-chevron-left"></i>
    </button>
    <div class="card-wrapper">
      <div class="card-row" :style="{ transform: `translateX(${translateX}px)` }">
        <PopularMovieCardItem
          v-for="moviecard in cards"
          :key="moviecard.id"
          :moviecard="moviecard"
        />
      </div>
    </div>
    <button class="arrow-button right" @click="moveRight">
      <i class="fa fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
import PopularMovieCardItem from '@/components/PopularMovieCardItem'

export default {
  name: 'PopularMovieCard',
  components: {
    PopularMovieCardItem,
  },
  data() {
    return {
      cards: [],
      translateX: 0,
      cardWidth: 200, // 카드의 가로 크기를 설정하세요
      containerWidth: 0,
    }
  },
  created() {
    this.cards = this.$store.state.cards
  },
  mounted() {
  this.$nextTick(() => {
    if (this.$refs.cardWrapper) {
      this.containerWidth = this.$refs.cardWrapper.offsetWidth
    }
  })
},
  methods: {
    moveRight() {
      const maxTranslate = this.containerWidth - this.cardWidth * this.cards.length
      if (this.translateX > maxTranslate) {
        this.translateX -= this.cardWidth
      }
    },
    moveLeft() {
      if (this.translateX < 0) {
        this.translateX += this.cardWidth
      }
    },
  },
}
</script>

<style>
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
  width: 100px; /* 버튼의 가로 크기를 조절 */
  height: 400px; /* 버튼의 세로 크기를 조절 */
  opacity: 0.8; /* 기본적으로 버튼을 투명하게 설정 */
  transition: opacity 0.3s; /* 마우스 호버 시 투명도 변화를 부드럽게 설정 */
}

.arrow-button:hover {
  opacity: 1; /* 마우스 호버 시 투명도를 1로 설정하여 버튼이 더욱 뚜렷하게 보이도록 함 */
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
