<template>
  <div class="login-container">
    <br>
    <br>
    <br>
    <div class="box">
    <h1 style="text-align: start;">로그인</h1>
    <form @submit.prevent="login" class="login-form">
      <label for="username"></label>
      <input placeholder="아이디" type="text" id="username" v-model="username" style="width: 300px; height:60px;"><br>

      <label for="password"></label>
      <input placeholder="비밀번호" type="password" id="password" v-model="password" style="width: 300px; height:60px;"><br>
      <br>
      <button type="submit" style="width: 300px; height:60px;" class="login-button">로그인</button>
      <!-- signup 버튼 -->
      <br>
      <br>
      <br>
      <div>
      <span style="color:gray;">회원이 아니신가요?</span> <a  @click.prevent="signup" href="" style="color:white; text-decoration: none;">지금 가입하세요.</a>
      <div>
        <br>
      <span style="color:gray;">이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</span> <a href="">자세히 알아보기.</a>
    </div>
    </div>
    </form>
  </div>
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

.login-button {
  background-color: red;
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
  background-color: rgb(98, 6, 6);
}
</style>
