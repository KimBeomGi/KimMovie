<template>
  <div class="comment-form">
      <hr>
      <h3 class="comment-heading">댓글</h3>
    <input type="password" v-model="password" rows="1" placeholder="비밀번호를 입력하세요.">
    <textarea v-model="content" rows="4" placeholder="댓글을 입력하세요."></textarea>
    <button @click="submitComment">작성</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CommentForm',
  data() {
    return {
      content: '',
      password: '',
    };
  },
  props:{
      articleID: Number
  },

  methods: {
    submitComment() {
      const content = this.content
      const password = this.password

      if (!content){
        alert('내용 입력해주세요')
        return
      }
      axios({
        method: 'post',
        url: `http://localhost:8000/communities/anonymous/${this.articleID}/anonycomments/`,
        data: {password, content},
        headers: {
          // Authorization: `Token ${this.$store.state.token}`
        }
      })
      .then(() => {
        // console.log(res)
        this.content = ''
          this.$router.push({ name: 'AnonymousCommunityView' })
this.$nextTick(() => {
  this.$router.push({ name:'AnonymousArticleDetailView', 
    params: {id: this.articleID}})})
    // alert(this.articleID)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}

</script>

<style scoped>
.comment-form {
  margin-bottom: 20px;
}

.comment-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
}

.comment-form button {
  margin-top: 10px;
    padding: 5px 10px;
    background-color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff;
}

.comment-form button:hover {
  background-color: gray;
}

.comment-heading {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
