<template>
  <div class="login-container">
    <h1>회원가입</h1>
    <form @submit.prevent="signUp" class="login-form">
      <label for="username">아이디 :</label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password1">비밀번호 :</label>
      <input type="password" id="password1" v-model="password1"><br>

      <label for="password2">비밀번호 확인 :</label>
      <input type="password" id="password2" v-model="password2">
      
      <button type="submit" class="signup-button">회원가입</button>
    </form>
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
    }
  },
  methods: {
    signUp() {
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

<style>
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
  margin-bottom: 10px;
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
  background-color: #2196f3;
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
  background-color: #0d8bf7;
}
</style>
