<template>
  <div>
    <h1>게시글 목록</h1>
    <!-- 게시글을 생성하는 뷰인 CreateView로 이동하는 링크 생성-->
    <router-link :to="{ name: 'CreateView' }">[글 작성]</router-link>
    <!-- ArticleList 컴포넌트를 보여준다.-->
    <ArticleList />
  </div>
</template>

<script>
// ArticleList를 불러와서
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'ArticleView',
  components: {
    // 등록한다.
    ArticleList,
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
