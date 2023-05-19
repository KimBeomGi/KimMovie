<!-- 로그인페이지다. 폼을 제출 할 시 새로고침되지 않도록 prevent를 사용한다. -->
<!-- 폼을 제출할 시 login() 메서드를 실행한다.-->
<template>
  <div>
    <h1>LogIn Page</h1>
    <form @submit.prevent="login">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password"> password : </label>
      <input type="password" id="password" v-model="password"><br>

      <input type="submit" value="logIn">
    </form>
  </div>
</template>

<script>
// 데이터는 username과 password가 있다.
// 폼을 제출하여 login() 메서드가 실행되면 payloda라는 변수에 데이터들을 담고
// action의 login 메서드로 이동한다.
export default {
  name: 'LogInView',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  created(){
  },
  methods: {
    login() {
      const username = this.username
      const password = this.password

      const payload = {
        username, password
      }
      this.$store.dispatch('login', payload)
    },
  }
}
</script>
