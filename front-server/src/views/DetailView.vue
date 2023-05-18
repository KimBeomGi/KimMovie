<template>
  <div>
    <p>글 번호 : {{ article?.id }}</p>
    <p>제목 : {{ article?.title }}</p>
    <p>작성자 : {{ article?.username }}</p>
    <p>내용 : {{ article?.content }}</p>
    <p>작성시간 : {{ article?.created_at }}</p>
    <p>수정시간 : {{ article?.updated_at }}</p>
  </div>
</template>

<script>
// 이 게시글 상세 페이지가 실행되면 created로 getArticleDetail() 메서드를 실행한다.
// 이 메서드는 axios를 실행하는데 get 메서드로 불러오는 역할을 한다.
// url은 백 서버의 http://127.0.0.1:8000/api/v1/articles/{ArticleListItem에서 id값} 이다.
// 백서버에서 해당 id에 해당하는 게시글을 불러와서 article 변수에 저장한다.
// ?는 값이 null일 때는 데이터를 가져오지 않는다는 뜻이다.
// 백서버에서 데이터를 가져오는데 성공하면 템플릿으로 출력한다.
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'DetailView',
  components: {
  },
  data() {
    return {
      article: null
    }
  },
  created() {
    this.getArticleDetail()
  },
  methods: {
    getArticleDetail() {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/${ this.$route.params.id }/`,
      })
      .then((res) => {
        console.log(res)
        this.article = res.data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
