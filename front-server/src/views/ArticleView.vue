<template>
  <div>
    <h1>Article Page</h1>
    <!-- 게시글을 생성하는 뷰인 CreateView로 이동하는 링크 생성-->
    <router-link :to="{ name: 'CreateView' }">[CREATE]</router-link>
    <!-- ArticleList 컴포넌트를 보여준다.-->
    <ArticleList />
    <hr>
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
    this.getArticles()
  },
  methods: {
    // 로그인이 되어있다면 getArticles 액션을 실행한다.
    // 로그인아 안되어 있다면 LogInView로 이동한다.
    getArticles() {
      if (this.isLogin) {
        this.$store.dispatch('getArticles')
      } else {
        alert('로그인이 필요한 페이지입니다...')
        this.$router.push({ name: 'LogInView' })
      }
    }
  }
}
</script>

<style>

</style>
