<template>
    <div style="background-color: black;">
      <h1 style="margin-bottom: 40px;">'{{query}}' 검색 결과</h1>
      <SearchedMovieCard/> 
    </div>
</template>

<script>
import SearchedMovieCard from '@/components/SearchedMovieCard'
export default {
    name : 'SearchedMovie',
    props:{
    query: String,
  },
    components : {
        SearchedMovieCard,
    },
    created() {
    // 화면이 켜지면 getArticles 메서드를 실행한다.
      this.getSearchCards()
    },
    methods : {
        getSearchCards() {
        this.$store.dispatch('getSearchCards',this.query)
      }
    }
}
</script>

<style>

</style>