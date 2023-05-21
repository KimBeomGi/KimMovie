<template>
    <div class="article-list">
      <DetailArticleListItem
        v-for="(article) in displayedArticles"
        :key="article.id"
        :article="article"
        :movie_id="movie_id"
      ></DetailArticleListItem>
  
      <div class="pagination">
        <button
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="setCurrentPage(pageNumber)"
          :class="{ active: currentPage === pageNumber }"
        >
          {{ pageNumber }}
        </button>
      </div>
    </div>
</template>
  
  <script>
  import DetailArticleListItem from "@/components/DetailArticleListItem";
  
  export default {
    name: "DetailArticleList",
    props: {
      movie_id: Number,
    },
    components: {
      DetailArticleListItem,
    },
    data() {
      return {
        articlesPerPage: 5, // 페이지당 게시글 수
        currentPage: 1, // 현재 페이지
      };
    },
    created() {
      this.$store.dispatch("getArticles");
    },
    computed: {
      // computed는 정보가 바뀔 때마다 실행됩니다.
      // state에 있는 articles에 전체 게시글이 변경될 때마다 갱신합니다.
      articles() {
        return this.$store.state.articles;
      },
      displayedArticles() {
        // 현재 페이지의 게시글만 반환합니다.
        const startIndex = (this.currentPage - 1) * this.articlesPerPage;
        const endIndex = startIndex + this.articlesPerPage;
        return this.filteredArticles.slice(startIndex, endIndex);
      },
      filteredArticles() {
        return this.articles.filter((article) => article.movie === this.movie_id).reverse();
        
      },
      pageCount() {
        // 전체 페이지 수를 계산합니다.
        return Math.ceil(this.filteredArticles.length / this.articlesPerPage);
      },
    },
    methods: {
      setCurrentPage(pageNumber) {
        // 페이지 번호를 클릭하여 현재 페이지를 설정합니다.
        this.currentPage = pageNumber;
      },
    },
  };
  </script>
  
  <style>
  /* 게시글을 좌측으로 밀착시킵니다. */
  .article-list {
    text-align: start;
  }
  
  .pagination {
    margin-top: 10px;
  }
  
  .pagination button {
    background-color: #f2f2f2;
    color: #333;
    border: none;
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .pagination button.active {
    background-color: #4caf50;
    color: white;
  }
  
  .pagination button:hover {
    background-color: #ddd;
  }
  </style>
  