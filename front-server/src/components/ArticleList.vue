<template>
  <div class="article-list">
    <!-- ArticleListItem 컴포넌트를 아래에 보여준다.-->
    <!-- 전체 게시글을 각각의 게시글로 출력한다. 각 게시글은 article이라는 이름으로 ArticleListItem 컴포넌트로 보내준다. -->
    <ArticleListItem 
      v-for="(article) in visibleArticles" :key="article.id" :article="article"
      class="article-list-item"
    />
    <div class="pagination">
      <button v-for="pageNumber in pageCount" :key="pageNumber" @click="goToPage(pageNumber)">{{ pageNumber }}</button>
    </div>
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
    // computed는 정보가 바뀔 때 실행된다.
    // state에 있는 articles에 전체 게시글이 변경될 때마다 갱신해준다.
    articles() {
      return this.$store.state.articles;
    },
    visibleArticles() {
  const start = (this.currentPage - 1) * this.pageSize;
  const end = start + this.pageSize;
  return this.articles
    .slice(start, end)
    .sort((a, b) => b.id - a.id)
    .reverse();
},
    pageCount() {
      return Math.ceil(this.articles.length / this.pageSize);
    },
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
    };
  },
  methods: {
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>

<style scoped>
/* 게시글을 좌로 밀착시킨다. */
.article-list {
  text-align: start;
}

.article-list-item {
  margin-bottom: 10px;
}

.pagination {
  margin-top: 20px;
}

.pagination button {
  display: inline-block;
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #e0e0e0;
}
</style>
