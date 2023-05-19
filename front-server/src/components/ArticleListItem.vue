<template>
  <div>
    <!-- 하나의 게시글의 id를 출력한다. -->
    <h5>{{ article.id }}</h5>
    <!-- 하나의 게시글의 username를 출력한다. -->
    <!-- <p>작성자 : {{ article.username }}</p> -->
    <!-- 하나의 게시글의 제목을 출력한다. -->
    <p>{{ article.title }}</p>
    <!-- DetailView로 가는 라우터링크를 만든다. 인자로 그 게시글의 id 를 첨가한다. -->
    <!-- 버튼이름은 [DETAIL]로 한다. -->
    <router-link :to="{
      name: 'DetailView',
      params: {id: article.id }}">
      [상세보기]
    </router-link>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  // Articlelist로부터 article을 Object형태 (리스트형태)로 받아온다.
  props: {
    article: Object,
  }
}
</script>

<style>

</style>
