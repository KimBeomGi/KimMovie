<template>
  <div>
    <div class="card space" style="width: 18rem; background-color: black;">
      <img @click="GoMovieDetailView()" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
      <div class="card-body ">
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  props:{
    moviecard: Object,
  },
  methods:{
    GoMovieDetailView(){
      this.$router.push({ name:'MovieDetailView', 
      params: {id: this.moviecard.id}})
    }
  }
}
</script>

<style>
.space{
  margin-right: 4rem
}
</style>