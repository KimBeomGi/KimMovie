<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'ArticleView',
  computed:{
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부
    }
  },
  created() {
    // 화면이 켜지면 getArticles 메서드를 실행한다.
    this.GoLogin()
  },
  methods: {
    // 로그인이 되어있다면 getArticles 액션을 실행한다.
    // 로그인아 안되어 있다면 LogInView로 이동한다.
    GoLogin() {
      if (this.isLogin) {
        alert('로그아웃이 완료되었습니다! 로그인화면으로 이동합니다.')
        this.$router.push({ name: 'LogInView' })
      } else {
        alert('로그인이 필요합니다.')
        this.$router.push({ name: 'LogInView' })
      }
    }
  }
}
</script>

<style>

</style>
