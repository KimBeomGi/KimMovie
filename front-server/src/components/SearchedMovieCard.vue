<template>
    <div class="card-container">
      <SearchedMovieCardItem
        v-for="moviecard in searchcards"
        :key="moviecard.id"
        :moviecard="moviecard"
      />
    </div>
</template>
  
<script>
  import SearchedMovieCardItem from '@/components/SearchedMovieCardItem'
  
  export default {
    name: 'PopularMovieCard',
    components: {
        SearchedMovieCardItem,
    },
    data() {
      return {

      }
    },
    computed: {
    searchcards() {
      return this.$store.state.searchcards
    },
  },

    methods: {
      
    },
  }
</script>
  
<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

</style>