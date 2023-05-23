<!-- <template>
  <div style="background-color: black;">
    <h1 style="text-align: start;">{{  }}장르 영화</h1>
    <PopularMovieCard/>
  </div>
</template>

<script>
import PopularMovieCard from '@/components/PopularMovieCard'
export default {
  name : 'PopularMovie',
  components : {
    PopularMovieCard,
  },
  created() {
  // 화면이 켜지면 getArticles 메서드를 실행한다.
    this.getCards()
  },
  methods : {
    getCards() {
      this.$store.dispatch('getCards')
    }
  }
}
</script>

<style>

</style> -->