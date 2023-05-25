<template>
    <div>
      <div style="margin-top:12px;">
      <div @click="GoArticleDetailView()">
      <!-- 하나의 게시글의 id를 출력한다. -->
      <!-- 하나의 게시글의 username를 출력한다. -->
      <!-- <p>작성자 : {{ article.username }}</p> -->
      <!-- 하나의 게시글의 제목을 출력한다. -->
      <h1 class="title">{{ article.title }}</h1>
    <p class="author">작성자: {{ article.username }}</p>
    <!-- <hr class="divider"> -->
      <!-- DetailView로 가는 라우터링크를 만든다. 인자로 그 게시글의 id 를 첨가한다. -->
      <!-- 버튼이름은 [DETAIL]로 한다. -->
      <!-- <router-link :to="{
        name: 'ArticleDetailView',
        params: {id: article.id }}">
        [상세보기]
      </router-link> -->
    </div>
  </div>
    <div style="height: 2px; background-color: white; margin-top: 10px;"></div>
    </div>
</template>
  
  <script>
  export default {
    name: 'DetailArticleListItem',
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
  
  <style scoped>
.article-list-item {
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  cursor: pointer;
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.author {
  font-size: 16px;
  color: #888888;
}

.divider {
  border: none;
  border-top: 1px solid #dddddd;
  margin-top: 20px;
}
</style>