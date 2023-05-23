<template>
  <div>
      <h1>프로필</h1>
      <p>{{ date_joined }}</p>
      <p>{{ email }}</p>
      <p>{{ exp }}</p>
      <p>{{ first_name }}</p>
      <p>{{ followers }}</p>
      <p>{{ followers_count }}</p>
      <p>{{ followers_name }}</p>
      <p>{{ followings }}</p>
      <p>{{ followings_count }}</p>
      <p>{{ followings_name }}</p>
      <p>{{ grade }}</p>
      <p>{{ groups }}</p>
      <p>{{ is_superuser }}</p>
      <p>{{ point }}</p>
      <p>{{ username }}</p>
      <!-- 여기에 프로필 내용을 추가하세요 -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProfileView',
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
        url: `http://localhost:8000/accounts/api/v1/profile/${this.$route.params.id}/`,
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

<style>

</style>
