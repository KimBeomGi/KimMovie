<template>
  <div class="profile-container" style="color: black;">
    <h1>{{ username }}의 프로필</h1>
    <div class="profile-info" style="text-align: start; display: flex; flex-direction: column;">
      <p>{{ isSuperuserText }}</p>
      <p>닉네임 : {{ username }}</p>
      <p>가입날짜 : {{ date_joined }}</p>

      <!-- <p>팔로워: {{ followers }}</p> -->
      <p>팔로워 수 : {{ followers_count }}명</p>
      <p>{{ username }}를 팔로워 한 사람 : {{ followers_name && followers_name.length > 0 ? followers_name.join(', ') : '없음' }}</p>
      <!-- <p>팔로잉: {{ followings }}</p> -->
      <p>팔로잉 수 : {{ followings_count }}명</p>
      <p>{{ username }}가 팔로잉 한 사람 : {{ followings_name && followings_name.length > 0 ? followings_name.join(', ') : '없음' }}</p>
      <p>등급 : {{ grade }}</p>
      
      <p>경험치 : {{ exp }} EXP</p>
      <p>포인트 : {{ point }} P</p>
      <p>좋아요 한 영화 : {{ like_movies_name ? like_movies_name.join(', ') : '' }}</p>
      
      <div class="button-container d-flex justify-content-between">
        <button @click="followUser" class="follow-button">{{ fbbutton }}</button>
        <button @click="back" class="follow1-button">뒤로가기</button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import moment from 'moment'

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
      fb : '',
      like_movies_name : ''
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
    },
    fbbutton(){
      if(this.fb){
        return '언팔로우'
      }else{
        return '팔로우'
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
          // console.log(this.$route.params.id)
          // console.log(res.data)
          this.date_joined = this.date_joined = moment(res.data.date_joined).format('YYYY년 MM월 DD일');
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
          this.fb = res.data.is_follow
          this.like_movies_name = res.data.like_movies_name
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
          // console.log(res.data)
          if (res.data.is_follow){
            this.fb = true
          }else{
            this.fb = false
          }
          
          this.followers = res.data.followers;
          this.followers_count = res.data.followers_count;
          this.followers_name = res.data.followers_name;
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back(){
      this.$router.go(-1)
    }
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

.follow-button:hover {
  background-color: rgb(98, 6, 6);
}
.follow1-button {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* 버튼 폰트 크기 */
  width: 150px; /* 버튼 너비 */
  height: 40px; /* 버튼 높이 */
}

.follow1-button:hover {
  background-color: rgb(40, 37, 37);
}
/* 추가적인 스타일링을 원하는 경우 여기에 작성하세요 */

</style>
