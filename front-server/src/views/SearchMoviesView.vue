<!-- App을 쳐음 켰을 때의 주소에 해당한다. 즉, 첫 화면이다.-->
<!-- HeaderMovie 컴포넌트에서 회전하는 포스터를 출력하고-->
<!-- PopularMovie 컴포넌트에서 인기있는 영화 포스터를 출력한다.-->
<template>
    <div>
      <SearchedMovie
      :query="$route.params.query"/>
    </div>
</template>
  
<script>
  // HeaderMovie 컴포넌트와 PopularMovie 컴포넌트를 받아온다.
  import SearchedMovie from '@/components/SearchedMovie.vue'
  export default {
    name: 'SearchMovie',
    components : {
        SearchedMovie,
    },
  }
  </script>
  
  <style>
  </style>
  