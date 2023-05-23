<template>
  <div class="profile-container" style="color : black;">
    <h1>프로필</h1>
    <div class="profile-info">
      <p>가입날짜: {{ date_joined }}</p>
      <p>경험치: {{ exp }}</p>
      <p>팔로워: {{ followers }}</p>
      <p>팔로워 수: {{ followers_count }}</p>
      <p>팔로워 이름: {{ followers_name }}</p>
      <p>팔로잉: {{ followings }}</p>
      <p>팔로잉 수: {{ followings_count }}</p>
      <p>팔로잉 이름: {{ followings_name }}</p>
      <p>등급: {{ grade }}</p>
      <p>그룹: {{ groups }}</p>
      <p>관리자 권한: {{ is_superuser }}</p>
      <p>포인트: {{ point }}</p>
      <p>유저명: {{ username }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MyProfileView',
  data() {
      return {
          date_joined : '',
          email : '',
          exp : '',
          first_name : '',
          followers : '',
          followers_count : '',
          followers_name : '',
          followings : '',
          followings_count : '',
          followings_name : '',
          grade : '',
          groups : '',
          is_superuser : '',
          point : '',
          username : '',
      }

  },
  created(){
    this.Profile()
  },
  methods:{
    Profile(){
      axios({
        method: 'get',
        url: 'http://localhost:8000/accounts/api/v1/profile/',
        headers: this.$store.getters.authHeader,
      })
        .then((res) => {
          console.log(this.$route.params.id)
          console.log(res.data)
          this.date_joined = res.data.date_joined
          this.email = res.data.email
          this.exp = res.data.exp
          this.first_name = res.data.first_name
          this.followers = res.data.followers
          this.followers_count = res.data.followers_count
          this.followers_name = res.data.followers_name
          this.followings = res.data.followings
          this.followings_count = res.data.followings_count
          this.followings_name = res.data.followings_name
          this.grade = res.data.grade
          this.groups = res.data.groups
          this.is_superuser = res.data.is_superuser
          this.point = res.data.point
          this.username = res.data.username
        })
        .catch((err) => {
          console.log(err)
        })
    },
  }
}
</script>

<style scoped>

.profile-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-info {
  margin-top: 20px;
}

.profile-info p {
  margin-bottom: 10px;
}

h1 {
  text-align: center;
  color: #333;
}

/* 추가적인 스타일링을 원하는 경우 여기에 작성하세요 */

</style>
