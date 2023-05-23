<template>
  <div class="profile-container" style="color: black;">
    <h1>내 프로필</h1>
    <div class="profile-info">
      <button @click="put_user" class="edit-button">회원정보 수정</button>
      <button @click="put_password" class="edit-button">비밀번호 변경</button>
      <p>{{ isSuperuserText }}</p>
      <p>닉네임 : {{ username }}</p>
      <p>이메일 : {{ email }}</p>
      <p>가입날짜 : {{ date_joined }}</p>
      
      <!-- <p>팔로워: {{ followers }}</p> -->
      <p>팔로워 수 : {{ followers_count }}명</p>
      <p>나를 팔로워 한 사람 : {{ followers_name ? followers_name.join(' ') : '' }}</p>
      <!-- <p>팔로잉: {{ followings }}</p> -->
      <p>팔로잉 수 : {{ followings_count }}명</p>
      <p>나를 팔로잉 한 사람 : {{ followings_name ? followings_name.join(' ') : '' }}</p>
      <p>등급: {{ grade }}</p>
      
      <p>경험치: {{ exp }} EXP</p>
      <p>포인트: {{ point }} P</p>
      <p>그룹: {{ groups }}</p>
    </div>
    <div v-if="isEditing_user" class="modal">
      <!-- 모달 내용을 추가하고 사용자가 수정할 수 있는 입력 필드를 제공합니다. -->
      <input v-model="updated_username" type="text" placeholder="닉네임을 입력하세요" class="input-field" />
      <!-- <input v-model="updated_email" type="text" placeholder="이메일을 입력하세요(선택)" class="input-field" /> -->
      <button @click="saveChanges_user" class="save-button">저장</button>
      <button @click="cancelEdit_user" class="cancel-button">취소</button>
    </div>
    <div v-if="isEditing_password" class="modal">
      <!-- 모달 내용을 추가하고 사용자가 수정할 수 있는 입력 필드를 제공합니다. -->
      <input v-model="updated_password1" type="text" placeholder="비밀번호를 입력하세요" class="input-field" />
      <input v-model="updated_password2" type="text" placeholder="비밀번호를 다시 입력하세요" class="input-field" />
      <button @click="saveChanges_password" class="save-button">저장</button>
      <button @click="cancelEdit_password" class="cancel-button">취소</button>
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
      updated_username:'',
      updated_email:'',
      updated_password1:'',
      updated_password2:'',
      isEditing_user: false,
      isEditing_password: false,

      email: '',
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
      fb : ''
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
        url: `http://localhost:8000/accounts/api/v1/profile/`,
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
          this.email = res.data.email
        })
        .catch((err) => {
          console.log(err)
        })
    },
    put_user(){
      this.isEditing_user = true;
      if(this.isEditing_password){
        this.isEditing_password = false
      }
    },
    put_password(){
      this.isEditing_password = true;
      if(this.isEditing_user){
        this.isEditing_user = false
      }
    },
    saveChanges_user(){
      const username = this.updated_username
      // const email = this.updated_email
      axios({
        method: 'put',
        url: 'http://localhost:8000/accounts/user/',
        headers: this.$store.getters.authHeader,
        data : {username}
      })
        .then((res) => {
          console.log(res.data)
          this.updated_username = ''
          this.username = res.data.username
          alert('닉네임 변경에 성공했습니다.')
    })
        .catch((err)=>{
          console.log(err)
          alert('이미 존재하는 닉네임입니다.')
        })
        this.isEditing_user = false
    },
    saveChanges_password(){
      const new_password1 = this.updated_password1
      const new_password2 = this.updated_password2
      axios({
        method: 'post',
        url: 'http://localhost:8000/accounts/password/change/',
        headers: this.$store.getters.authHeader,
        data : {new_password1,new_password2}
      })
        .then((res) => {
          console.log(res.data)
          alert('비밀번호 변경에 성공했습니다.')
          this.isEditing_password = false
    })
    .catch((err)=>{
          console.log(err)
          alert('형식에 맞지 않는 비밀번호입니다..')
        })
        
        this.isEditing_password = false
    },
    cancelEdit_user(){
      this.isEditing_user = false
    },
    cancelEdit_password(){
      this.isEditing_password = false
    }
 
}}
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

.edit-button {
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
  margin-bottom: 10px;
  width: 180px;
}

.edit-button:hover {
  background-color: #0056b3;
}

.save-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #28a745;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.save-button:hover {
  background-color: #218838;
}

.cancel-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dc3545;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-button:hover {
  background-color: #c82333;
}
/* 추가적인 스타일링을 원하는 경우 여기에 작성하세요 */

.modal {
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
.input-field {
  width: 80%; /* 입력 필드의 너비를 100%로 설정합니다. */
  height: 10%; /* 입력 필드의 너비를 100%로 설정합니다. */
  margin-bottom: 5px;
  padding: 10px; /* 입력 필드 내부 여백 설정 */
  font-size: 16px; /* 입력 필드 글꼴 크기 설정 */
  /* 기타 원하는 스타일을 추가적으로 설정할 수 있습니다. */
}

.modal button {
  margin-top: 5px;
}
</style>
