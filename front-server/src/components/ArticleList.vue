<template>
  <div class="article-list">
    <!-- ArticleListItem 컴포넌트를 아래에 보여준다.-->
    <!-- 전체 게시글을 각각의 게시글로 출력한다. 각 게시글은 article이라는 이름으로 ArticleListItem 컴포넌트로 보내준다. -->
    <ArticleListItem 
    v-for="article in articles" :key="article.id" :article="article"
    />
  </div>
</template>

<script>
import ArticleListItem from '@/components/ArticleListItem'

export default {
  name: 'ArticleList',
  components: {
    ArticleListItem,
  },
  computed: {
    // computed는 정보가 바뀔때 실행된다.
    // state에 있는 articles에 전체 게시글이 변경될때마다 갱신해준다.
    articles() {
      return this.$store.state.articles
    }
  }
}
</script>

<style>
/* 게시글을 좌로 밀착시킨다. */
.article-list {
  text-align: start;
}
</style>
