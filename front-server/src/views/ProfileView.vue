<template>
  <div class="profile-container" style="color : black;">
    <h1>프로필</h1>
    <div class="profile-info">
      <p>{{ isSuperuserText }}</p>
      <p>이름: {{ username }}</p>
      <p>가입날짜: {{ date_joined }}</p>
      
      <!-- <p>팔로워: {{ followers }}</p> -->
      <p>팔로워 : {{ followers_count }}명</p>
      <p>{{ followers_name? followers_name.join(' ') : '' }}</p>
      <!-- <p>팔로잉: {{ followings }}</p> -->
      <p>팔로잉 : {{ followings_count }}명</p>
      <p>{{ followings_name? followings_name.join(' ') : '' }}</p>
      <p>등급: {{ grade }}</p>
      
      <p>경험치: {{ exp }} EXP</p>
      <p>포인트: {{ point }} P</p>
      <p>그룹: {{ groups }}</p>
      <button @click="followUser" class="follow-button">팔로우</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProfileView',
  data() {
    return {
      date_joined: '',
      exp: '',
      followers: '',
      followers_count: '',
      followers_name: null,
      followings: '',
      followings_count: '',
      followings_name: '',
      grade: '',
      groups: '',
      is_superuser: '',
      point: '',
      username: '',
    }
  },
  created() {
    this.Profile()
  },
  computed: {
    isSuperuserText() {
      if (this.is_superuser === true) {
        return '관리자';
      } else {
        return null;
      }
    }
  },
  methods: {
    Profile() {
      axios({
        method: 'get',
        url: `http://localhost:8000/accounts/api/v1/profile/${this.$route.params.id}/`,
        headers: this.$store.getters.authHeader,
      })
        .then((res) => {
          console.log(this.$route.params.id)
          console.log(res.data)
          this.date_joined = res.data.date_joined
          this.exp = res.data.exp
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
    followUser() {
      axios({
        method: 'post',
        url: `http://localhost:8000/accounts/api/v1/follow/${this.$route.params.id}/`,
        headers: this.$store.getters.authHeader,
      })
        .then((res) => {
          console.log(res.data)
          if (res.data.is_follow){
            alert('팔로우 하였습니다.');
          }else{
            alert('언팔로우 하였습니다..');
          }
          
          this.followers = res.data.followers;
          this.followers_count = res.data.followers_count;
          this.followers_name = res.data.followers_name;
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
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

.follow-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  width: 100px;
}

.follow-button:hover {
  background-color: #0056b3;
}
/* 추가적인 스타일링을 원하는 경우 여기에 작성하세요 */

</style>
