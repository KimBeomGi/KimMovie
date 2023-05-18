<!--회원가입 페이지이다.-->
<!-- 회원가입 폼에 정보를 작성하고 제출하면 signUp 함수를 실행한다. -->
<!-- 이때 새로고침을 하지 않기 위해 prevent를 사용한다. -->
<template>
  <div>
    <h1>회원가입</h1>
    <form @submit.prevent="signUp">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password1"> password : </label>
      <input type="password" id="password1" v-model="password1"><br>

      <label for="password2"> password confirmation : </label>
      <input type="password" id="password2" v-model="password2">
      
      <input type="submit" value="SignUp">
    </form>
  </div>
</template>

<script>
// 회원가입폼을 제출해서 signUp 함수를 실행하면 payload에 아이디와 패스워드를 담는다.
// payload를 인자로 갖고 actions의 signUp 메서드를 실행한다.
export default {
  name: 'SignUpView',
  data() {
    return {
      username: null,
      password1: null,
      password2: null,
    }
  },
  methods: {
    signUp() {
      // console.log('signup')
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2

      const payload = {
        username, password1, password2
      }

      this.$store.dispatch('signUp', payload)

    }
  }
}
</script>

