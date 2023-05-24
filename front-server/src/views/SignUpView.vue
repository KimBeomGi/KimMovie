<template>
  <div class="login-container">
    <br>
    <br>
    <br>
    <div class="box">
      <h1 style="text-align: start;">회원가입</h1>
    <form @submit.prevent="signUp" class="login-form">
      <label for="username"></label>
      <input placeholder="아이디" type="text" id="username" style="width: 300px; height:60px;" v-model="username"><br>

      <label for="password1"></label>
      <input placeholder="비밀번호 입력" style="width: 300px; height:60px;" type="password" id="password1" v-model="password1"><br>

      <label for="password2"></label>
      <input placeholder="비밀번호 재확인" style="width: 300px; height:60px;" type="password" id="password2" v-model="password2"><br>
      
      <label  for="email"></label>
      <input style="width: 300px; height:60px;" placeholder="이메일 : kimssafy@ssafy.com" type="text" id="email" v-model="email">
        <br>
        <br>
      <button style="width: 300px; height:60px;" type="submit" class="signup-button">회원가입</button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      username: null,
      password1: null,
      password2: null,
      email: null
    }
  },
  methods: {
    signUp() {
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2
      const email = this.email

      const payload = {
        username, password1, password2,email
      }

      this.$store.dispatch('signUp', payload)
    }
  }
}
</script>

<style>
.box{
  height: 1000px;
  width: 300px;
  background-color: black;
}
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form label {
  margin-bottom: 1px;
}

.login-form input[type="text"],
.login-form input[type="password"] {
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.signup-button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 150px;
  height: 40px;
}

.signup-button:hover {
  background-color: rgb(98, 6, 6);
}
</style>
