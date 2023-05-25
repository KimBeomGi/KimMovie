<!-- App을 쳐음 켰을 때의 주소에 해당한다. 즉, 첫 화면이다.-->
<!-- HeaderMovie 컴포넌트에서 회전하는 포스터를 출력하고-->
<!-- PopularMovie 컴포넌트에서 인기있는 영화 포스터를 출력한다.-->
<template>
  <div>
    <HeaderMovie/>
    <hr>
    <h1 class="font_Sunflower">당신을 위한 추천</h1>
    <hr>
    <RecommendForYou/>
    <hr>
    <!--  -->
    <h1 class="font_Sunflower">대중의 선택</h1>
    <hr>
    <AdvertiseMovie/>
    <hr>
    <!--  -->
    <h1 class="font_Sunflower">장르별 모아보기</h1>
    <hr>
    <GenreMovie/>
    
  </div>
</template>

<script>
// HeaderMovie 컴포넌트와 PopularMovie 컴포넌트를 받아온다.
import HeaderMovie from '@/components/HeaderMovie.vue'
import GenreMovie from '@/components/GenreMovie.vue'
import RecommendForYou from '@/components/RecommendForYou.vue'
import AdvertiseMovie from '@/components/AdvertiseMovie.vue'


export default {
  name: 'HomeView',
  components : {
    HeaderMovie,
    GenreMovie,
    RecommendForYou,
    AdvertiseMovie,
  },
}
</script>

<style>
.font_Sunflower{
  font-family: 'Sunflower', sans-serif;
}
</style>
