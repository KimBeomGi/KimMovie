<template>
    <div>
      <img @click="GoMovieDetailView()" :src="`https://image.tmdb.org/t/p/w185${moviecard?.poster_path}`" class="card-img-top" alt="">
    </div>
</template>
  
<script>
  export default {
    props: {
      moviecard: Object,
    },
    methods: {
      GoMovieDetailView() {
        this.$router.push({ name: 'MovieDetailView', params: { id: this.moviecard.id } })
      },
    },
  }
  </script>
  
  <style>
  .card-img-top {
    object-fit: cover;
    border-radius: 10%;
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  .card-img-top:hover {
    transform: scale(1.05);
  }
  </style>
  