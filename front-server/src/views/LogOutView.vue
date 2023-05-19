<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'LogOutView',
  computed:{
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부
    }
  },
  created() {
    // 화면이 켜지면 getArticles 메서드를 실행한다.
    this.$store.dispatch('logout')
  },
  methods: {
  }
}
</script>

<style>

</style>
