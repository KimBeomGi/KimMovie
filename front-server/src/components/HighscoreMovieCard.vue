<template>
  <div>
    <div class= "d-flex flex-wrap justify-content-center">
      <PopularMovieCardItem
      v-for="moviecard in cards" :key="moviecard.id" 
      :moviecard="moviecard"
      />
    </div>
  </div>
</template>

<script>
import PopularMovieCardItem from '@/components/PopularMovieCardItem'

export default {
name : 'PopularMovieCard',
components:{
  PopularMovieCardItem,
},
computed:{
  cards(){
    return this.$store.state.cards
  }
},
methods:{
},

}
</script>

<style>

</style>