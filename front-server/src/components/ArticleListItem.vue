<template>
  <div >
    <!-- <hr> -->
    <div style="margin-left:100px; margin-top:12px;">
      <!-- <div class="box"></div> -->
    <div @click="GoArticleDetailView()">
    <!-- 하나의 게시글의 username를 출력한다. -->
    <!-- <p>작성자 : {{ article.username }}</p> -->
    <!-- 하나의 게시글의 제목을 출력한다. -->
    <p style="font-size: 24px;" >[{{ article.movie_title }}]</p>
    <p class="font_NanumMyeongjo" style="font-size: 24px; font-weight: bold;">{{ article.title }}</p>
      <!-- <p>번호 {{ article.id}}</p> -->
    <p>작성자 : {{ article.username }}</p>
    <!-- DetailView로 가는 라우터링크를 만든다. 인자로 그 게시글의 id 를 첨가한다. -->
    <!-- 버튼이름은 [DETAIL]로 한다. -->
    <!-- <router-link :to="{
      name: 'ArticleDetailView',
      params: {id: article.id }}">
      [상세보기]
    </router-link> -->
  </div>
    <!-- <hr> -->
    </div>
    <div style="height: 2px; background-color: #000; margin-top: 10px;"></div>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  // Articlelist로부터 article을 Object형태 (리스트형태)로 받아온다.
  props: {
    article: Object,
  },
  methods : {
    GoArticleDetailView(){
      this.$router.push({ name:'ArticleDetailView', 
      params: {id: this.article.id}})
    }
  }
}
</script>

<style>
.font_NanumMyeongjo{
  font-family: 'Nanum Myeongjo', serif;
}
.box{
  width: 100px;
  height: 93px;
}
</style>
