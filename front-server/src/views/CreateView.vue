<!-- 게시글을 작성하는 뷰이다. -->
<!--prevent를 사용하여 submit으로 폼을 제출해도 새로고침되지 않도록 한다.-->
<!-- trim을 사용하여 입력하는 제목에 공백이 생기지 않도록 한다.-->
<!-- 폼을 제출할 시 createArticle() 메서드를 실행한다.-->
<template>
  <div>
    <form @submit.prevent="createArticle">
      <label for="title">제목 : </label>
      <input type="text" id="title" v-model.trim="title"><br>
      <label for="content">내용 : </label>
      <textarea id="content" cols="30" rows="10" v-model="content"></textarea><br>
      <label for="movie_id">movie_id : </label>
      <input type="text" id="movie_id" v-model.trim="movie"><br>
      <input type="submit" id="submit">
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
      movie: null,
    }
  },
  methods: {
    createArticle() {
      const title = this.title
      const content = this.content
      const movie = this.movie

      if (!title) {
        alert('제목 입력해주세요')
        return
      } else if (!content){
        alert('내용 입력해주세요')
        return
      }
      axios({
        method: 'post',
        url: `${API_URL}/communities/`,
        data: { title, content,movie},
        headers: {
          Authorization: `Token ${this.$store.state.token}`
        }
      })
      .then(() => {
        // console.log(res)
        this.$router.push({name: 'CommunityView'})
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
