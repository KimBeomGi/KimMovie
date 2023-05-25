<!-- 게시글을 작성하는 뷰이다. -->
<!--prevent를 사용하여 submit으로 폼을 제출해도 새로고침되지 않도록 한다.-->
<!-- trim을 사용하여 입력하는 제목에 공백이 생기지 않도록 한다.-->
<!-- 폼을 제출할 시 createArticle() 메서드를 실행한다.-->
<template>
  <div>
    <form @submit.prevent="createArticle" class="create-form">
      <label for="title" class="form-label"></label>
      <input placeholder="제목" type="text" id="title" v-model.trim="title" class="form-input">
      <br>
      <label for="content" class="form-label"></label>
      <textarea placeholder="내용" id="content" cols="30" rows="10" v-model="content" class="form-textarea"></textarea>
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
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'CreateView',
  data() {
    return {
      title: null,
      content: null,
      
    }
  },
  computed:{
    
  },
  
  methods: {
    createArticle() {
      const title = this.title
      const content = this.content
      const movie = this.$route.params.movie
      const movieTitle = this.$route.params.movieTitle
      
      

      if (!title) {
        alert('제목 입력해주세요')
        return
      } else if (!content){
        alert('내용 입력해주세요')
        return
      }
      //const movieTitle = this.$route.params.movieTitle
      axios({
        method: 'post',
        url: `${API_URL}/communities/`,
        data: { title, content,movie,movieTitle},
        headers: {
          Authorization: `Token ${this.$store.state.token}`
        }
      })
      .then(() => {
        // console.log(res)
        console.log(this.movieTitle)
        this.$router.push({ name:'MovieDetailView', 
        params: {id: movie}})
      })
      .catch((err) => {
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
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* 버튼 폰트 크기 */
  width: 300px; /* 버튼 너비 */
  height: 40px; /* 버튼 높이 */
}

.form-button:hover {
  background-color: rgb(98, 6, 6);
}
</style>