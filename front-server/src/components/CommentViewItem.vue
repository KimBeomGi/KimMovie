<template>
  <div class="comment-item">
    <p class="comment-user">{{ comment.username }}</p>
    <!-- <p class="comment-user">작성자: {{ comment.user }}</p> -->
    <p class="comment-date">{{ formatDateTime(comment.created_at) }}</p>
    <p class="comment-content">{{ comment.content }}</p>
    <div class="button-container">
      <button @click="putComment" class="put-button">수정</button>
      <button @click="deleteComment" class="delete-button">삭제</button>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'
  export default {
    name: 'CommentViewItem',
    props: {
      comment: Object
    },
    methods: {
  formatDateTime(datetime) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const formattedDateTime = new Date(datetime).toLocaleString('en-US', options);
    return formattedDateTime.replace(',', '');
  },
  putComment(){

  },
  deleteComment(){
      axios({
        method: 'DELETE',
        url: `http://localhost:8000/communities/comments/${this.comment.id}/`,
        headers: this.$store.getters.authHeader,
      })
        .then((res) => {
          console.log(res.data)
          this.article = res.data
          this.$router.go(-1);
          alert('삭제 완료하였습니다.')
        })
        .catch((err) => {
          console.log(this.comment.id)
          alert('타인의 게시물은 삭제할 수 없습니다.')
          console.log(err)
        })
    }

}
  }
</script>
  
<style scoped>
.comment-item {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

.comment-user {
  font-weight: bold;
  margin-bottom: 5px;
}

.comment-date {
  font-size: 12px;
  color: #999;
  margin-bottom: 5px;
}

.comment-content {
  font-size: 14px;
  margin-bottom: 5px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.delete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff5a5f;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

.delete-button:hover {
  background-color: #ff4449;
}

.put-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.put-button:hover {
  background-color: green;
}
</style>
  