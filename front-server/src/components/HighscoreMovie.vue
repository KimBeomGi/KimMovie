<template>
  <div>
    <HighscoreMovieCard/>
  </div>
</template>

<script>
import HighscoreMovieCard from '@/components/HighscoreMovieCard'
export default {
  name : 'PopularMovie',
  components : {
    HighscoreMovieCard,
  },
  created() {
  // 화면이 켜지면 getArticles 메서드를 실행한다.
    this.getCards_highscore()
  },
  methods : {
    getCards_highscore() {
      this.$store.dispatch('getCards_highscore')
    }
  }
}
</script>

<style>

</style>