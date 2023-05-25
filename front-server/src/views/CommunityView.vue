<template>
  <div style="background-color: #ffffff; color: #000000;">
    <div style="background-color: black; color: white; padding-bottom:10px">
    <br>
    <h1 style="font-weight: bold;">영화 리뷰 게시판</h1>
    <p>*게시글 작성은 영화 상세보기에서 가능합니다.</p>

  </div>
    
    <!-- ArticleList 컴포넌트를 보여준다.-->
    <ArticleList/>
    <!-- <div v-for="article in articles.slice((page - 1)*15,(page*15))" :key="article.pk">
        <article-view :article="article"></article-view>
      </div> -->
  </div>
</template>

<script>
// ArticleList를 불러와서
// import ArticleView from '@/components/ArticleView.vue'
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'CommunityView',
  components: {
    // 등록한다.
    // ArticleView,
    ArticleList
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부
    }
  },
  created() {
    // 화면이 켜지면 getArticles 메서드를 실행한다.
    this.$store.dispatch('getArticles')
  },
  methods: {
    
  }
}
</script>

<style>

</style>
