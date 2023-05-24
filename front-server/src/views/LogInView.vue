<template>
  <div class="login-container">
    <h1>로그인</h1>
    <form @submit.prevent="login" class="login-form">
      <label for="username">아이디 :</label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password">비밀번호 :</label>
      <input type="password" id="password" v-model="password"><br>

      <button type="submit" class="login-button">로그인</button>
      <!-- signup 버튼 -->
          <a @click.prevent="signup" class="nav-link" href="">signup <span class="sr-only"></span></a>

    </form>
  </div>
</template>

<script>
export default {
  name: 'LogInView',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    login() {
      const username = this.username
      const password = this.password

      const payload = {
        username,
        password
      }
      this.$store.dispatch('login', payload)
    },
    signup() {
      if (this.$route.name !== 'SignUpView') {
      this.$router.push({ name: 'SignUpView' }); // 회원가입 라우터링크로 이동
    }},
  }
}
</script>

<style scoped>
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

.login-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* 버튼 폰트 크기 */
  width: 150px; /* 버튼 너비 */
  height: 40px; /* 버튼 높이 */
}

.login-button:hover {
  background-color: #45a049;
}
</style>
