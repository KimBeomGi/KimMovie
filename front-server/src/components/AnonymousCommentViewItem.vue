<template>
    <div class="comment-item">
      <p class="comment-user">[익명]</p>
      <input v-model="password" type="password" rows="1" placeholder="비밀번호를 입력하세요.">
      <!-- <p class="comment-user">작성자: {{ comment.user }}</p> -->
      <p class="comment-date">{{ formatDateTime(comment.created_at) }}</p>
      <p class="comment-content">{{ comment123 }}</p>
      <div class="button-container">
        <button @click="putComment" class="put-button">수정</button>
        <button @click="deleteComment" class="delete-button">삭제</button>
      </div>
      <div v-if="isEditing" class="modal">
      <!-- 모달 내용을 추가하고 사용자가 수정할 수 있는 입력 필드를 제공합니다. -->
      <input v-model="updatedContent" type="text" placeholder="수정할 내용을 입력하세요" class="input-field"/>
      <div class="button-container">
      <button class="save-button" @click="saveChanges">저장</button>
      <button class="save-button" @click="cancelEdit">취소</button>
    </div>
    </div>
    </div>
</template>
    
  <script>
  import axios from 'axios'
    export default {
      name: 'CommentViewItem',
      props: {
        comment: Object,
        articleid: Number
      },
      data(){
        return{
          isEditing: false, // 수정 모달 표시 여부를 저장하는 데이터 속성
        updatedContent: '', // 수정된 내용을 저장하는 데이터 속성
        comment123 : '',
        password : ''
        }
      },
      created(){
        this.comment123 = this.comment.content
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
    deleteComment(){
        const password = this.password
        axios({
          method: 'DELETE',
          url: `http://localhost:8000/communities/anonymous/anonycomments/${this.comment.id}/`,
          data : {password}
        //   headers: this.$store.getters.authHeader,
        })
          .then((res) => {
            // console.log(this.article.id)
            console.log(res.data)
            this.article = res.data
            this.$router.push({name: 'CommunityView'})
            this.$router.go(-1);
            alert('삭제 완료하였습니다.')
          })
          .catch((err) => {
            console.log(this.comment.id)
            alert('비밀번호가 틀립니다.')
            console.log(err)
          })
      },
      putComment() {
        this.isEditing = true; // 수정 모달 표시
      },
  
      saveChanges() {
        // 수정 내용을 서버에 전송하는 로직을 추가합니다.
        // 수정 완료 후 필요한 처리를 수행합니다.
        const content = this.updatedContent
        const password = this.password
  
    axios({
      method: 'PUT',
      url: `http://localhost:8000/communities/anonymous/anonycomments/${this.comment.id}/`,
    //   headers: this.$store.getters.authHeader,
      data: {password,content},
    })
      .then((res) => {
        // 수정이 성공한 경우의 처리
        // 선택적으로, 수정된 데이터로 댓글을 로컬에서 업데이트할 수 있습니다.
        this.comment123 = res.data.content;
        alert('수정 완료하였습니다.');
        this.password = ''
      })
      .catch((err) => {
        // 에러 처리
        console.log(err);
        alert('비밀번호가 틀립니다.');
        this.password = ''
        this.updatedContent = ''
      });
  
        this.isEditing = false; // 수정 모달 닫기
      },
  
      cancelEdit() {
        this.isEditing = false; // 수정 모달 닫기
      },
  
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
    margin-left: 10px;
  margin-top: 20px;
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* 버튼 폰트 크기 */
  width: 100px; /* 버튼 너비 */
  height: 40px; /* 버튼 높이 */margin-left: 10px;
  margin-top: 20px;
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* 버튼 폰트 크기 */
  width: 100px; /* 버튼 너비 */
  height: 40px; /* 버튼 높이 */
  }
  
  .delete-button:hover {
    background-color: gray;
  }
  
  .put-button {
    margin-top: 20px;
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* 버튼 폰트 크기 */
  width: 100px; /* 버튼 너비 */
  height: 40px; /* 버튼 높이 */
  }
  
  .put-button:hover {
    background-color: gray;
  }
  
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

  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  .save-button{
    margin-top: 20px;
    margin-left: 5px;
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* 버튼 폰트 크기 */
  width: 100px; /* 버튼 너비 */
  height: 40px; /* 버튼 높이 */
  }

  .save-button:hover {
  background-color: gray;
}
  </style>
    