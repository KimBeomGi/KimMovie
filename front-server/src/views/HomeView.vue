<!-- App을 쳐음 켰을 때의 주소에 해당한다. 즉, 첫 화면이다.-->
<!-- HeaderMovie 컴포넌트에서 회전하는 포스터를 출력하고-->
<!-- PopularMovie 컴포넌트에서 인기있는 영화 포스터를 출력한다.-->
<template>
  <div>
    <HeaderMovie/>
    <RecommendForYou/>
    <PopularMovie/>
    <GenreMovie/>
  </div>
</template>

<script>
// HeaderMovie 컴포넌트와 PopularMovie 컴포넌트를 받아온다.
import HeaderMovie from '@/components/HeaderMovie.vue'
import PopularMovie from '@/components/PopularMovie.vue'
import GenreMovie from '@/components/GenreMovie.vue'
import RecommendForYou from '@/components/RecommendForYou.vue'

export default {
  name: 'HomeView',
  components : {
    HeaderMovie,
    PopularMovie,
    GenreMovie,
    RecommendForYou,
  },
}
</script>

<style>
</style>
