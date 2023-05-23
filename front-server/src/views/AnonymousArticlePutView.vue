<!-- 게시글을 수정하는 뷰이다. -->
<!--prevent를 사용하여 submit으로 폼을 제출해도 새로고침되지 않도록 한다.-->
<!-- trim을 사용하여 입력하는 제목에 공백이 생기지 않도록 한다.-->
<!-- 폼을 제출할 시 createArticle() 메서드를 실행한다.-->
<template>
  <div>
    <form @submit.prevent="putArticle" class="create-form">
      <!-- <label for="password" class="form-label">패스워드 :</label>
      <input type="text" id="password" v-model.trim="password" class="form-input">
      <br> -->
      <label for="title" class="form-label">제목 :</label>
      <input type="text" id="title" v-model.trim="title" class="form-input">
      <br>
      <label for="content" class="form-label">내용 :</label>
      <textarea id="content" cols="30" rows="10" v-model="content" class="form-textarea"></textarea>
      <br>
      <input type="submit" id="submit" class="form-button" value="작성">
    </form>
  </div>
</template>

<script>
// 데이터로는 글의 제목인 title과 글의 내용인 content를 갖는다.
// 폼을 제출할 때 실행시킬 createArticle() 메서드가 있는데 현재 폼의 title과 content를 변수에 저장한다.
// 제목이나 내용이 비어 있으면 아무것도 하지 않고 함수를 종료한다.
// 제목과 내용이 유효하면 post형태의 axios를 실행한다.
// axios의 url은 백엔드의 http://127.0.0.1:8000/api/v1/articles/ 주소에 해당한다.
// 입력할 데이터는 title과 content이다.
// 데이터를 전송하는데 성공했으면 게시글 목록 페이지인 CommunityView로 이동한다.
import axios from 'axios'

export default {
  name: 'ArticlePutView',
  data() {
    return {
      id : null,
      title: this.$route.params.title,
      content: this.$route.params.content,
      password : null
    }
  },
  computed:{
    
  },
  
  methods: {
    putArticle() {
      const id = this.$route.params.id
      const title = this.title
      const content = this.content
      const password = this.$route.params.password
      
      

      if (!title) {
        alert('제목 입력해주세요')
        return
      } else if (!content){
        alert('내용 입력해주세요')
        return
      }
      //const movieTitle = this.$route.params.movieTitle
      axios({
        method: 'put',
        url: `http://127.0.0.1:8000/communities/anonymous/${id}/`,
        data: {title, content,password},
        // headers: {
        //   // Authorization: `Token ${this.$store.state.token}`
        // }
      })
      .then(() => {
        alert('수정 완료하였습니다.')
        console.log('성공')
        console.log(id)
        console.log(password)
        console.log(title)
        console.log(content)
        // console.log(res)
        this.$router.go(-1);
      })
      .catch((err) => {
        alert('비밀번호가 틀립니다.')
        this.$router.go(-1);
        console.log(id)
        console.log(password)
        console.log(title)
        console.log(content)
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.create-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.form-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input,
.form-textarea {
  width: 300px;
  padding: 5px;
  margin-bottom: 10px;
}

.form-textarea {
  resize: vertical;
}

.form-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #45a049;
}
</style>