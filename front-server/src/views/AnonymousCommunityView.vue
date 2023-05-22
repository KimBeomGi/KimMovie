<template>
  <div style="background-color: #ffffff; color: #000000;">
    <h1>익명 게시판</h1>
    
    <!-- ArticleList 컴포넌트를 보여준다.-->
    <AnonymousArticleList/>
    <!-- <div v-for="article in articles.slice((page - 1)*15,(page*15))" :key="article.pk">
        <article-view :article="article"></article-view>
      </div> -->
  </div>
</template>

<script>
// ArticleList를 불러와서
// import ArticleView from '@/components/ArticleView.vue'
import AnonymousArticleList from '@/components/AnonymousArticleList.vue'

export default {
  name: 'AnonymousCommunityView',
  components: {
    // 등록한다.
    // ArticleView,
    AnonymousArticleList
  },
  computed:{
    // isLogin() {
    //   return this.$store.getters.isLogin // 로그인 여부
    // }
  },
  created() {
    // 화면이 켜지면 getArticles 메서드를 실행한다.
    this.$store.dispatch('getAnonymousArticles')
  },
  methods: {
  }
  }

</script>

<style>

</style>
