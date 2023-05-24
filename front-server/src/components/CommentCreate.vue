<template>
    <div class="comment-form">
        <hr>
        <h3 class="comment-heading">댓글</h3>
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
      };
    },
    props:{
        articleID: Number
    },
    methods: {
      submitComment() {
        const content = this.content
  
        if (!content){
          alert('내용 입력해주세요')
          return
        }
        axios({
          method: 'post',
          url: `http://localhost:8000/communities/${this.articleID}/comments/`,
          data: {content},
          headers: {
            Authorization: `Token ${this.$store.state.token}`
          }
        })
        .then(() => {
          // console.log(res)
          this.content = ''
            this.$router.push({ name: 'CommunityView' })
  this.$nextTick(() => {
    this.$router.push({ name:'ArticleDetailView', 
      params: {id: this.articleID}})})
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
  