<template>
  <div class="article-detail" style="text-align: start;">
    
    <!-- <h1 class="article-title">{{ article?.movie_title }}</h1> -->
    <div style="display: flex;
  flex-direction: row;
  align-items: center;">
  <div>
    <label for="title" class="form-label"></label>
    <input placeholder="비밀번호를 입력하세요." type="password" id="title" v-model.trim="password" class="form-input">
      
    </div>
    
    </div>
    <hr>
    <p class="article-title2 font_NanumMyeongjo">{{ article?.title }}</p>
    <!-- <span class="article-info">{{ article?.username }} | </span> -->
    <span class="article-info">[익명] | {{ formatDateTime(article?.created_at) }}</span>
    <div class="article-content">
      <p>{{ article?.content }}</p>
    </div>
    <div style="display: flex; flex-direction: row; align-items: center;">
    <button  @click="putArticle" class="put-button">수정</button>
    <button @click="deleteArticle" class="delete-button">삭제</button>
    </div>
    
    <!-- <p>{{ article?.password }}</p> -->
    <AnonymousCommentCreate :articleID="article?.id"/>
    <AnonymousCommentView :articleID="article?.id" />
  </div>
</template>

<script>
import AnonymousCommentView from '@/components/AnonymousCommentView'
import AnonymousCommentCreate from '@/components/AnonymousCommentCreate'
import axios from 'axios'

export default {
  name: 'AnonymousArticleDetailView',
  components:{
    AnonymousCommentView,
    AnonymousCommentCreate
    // Anonymous
  },
  data() {
    return {
      article: null,
      password : null
    }
  },  
  computed:{
    articleID(){
      return this.$route.params.id;
    }
  },
  created() {
    this.getArticleDetail()
  },
  methods: {
    getArticleDetail() {
      axios({
        method: 'get',
        url: `http://localhost:8000/communities/anonymous/${this.$route.params.id}/`,
        // headers: this.$store.getters.authHeader,
      })
        .then((res) => {
          // console.log(res.data)/
          this.article = res.data
        })
        .catch((err) => {
          
          console.log(err)
        })
    },
    formatDateTime(datetime) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const formattedDateTime = new Date(datetime).toLocaleString('en-US', options);
      return formattedDateTime.replace(',', '');
    },
    deleteArticle(){
      const password = this.password
      axios({
        method: 'DELETE',
        url: `http://localhost:8000/communities/anonymous/${this.$route.params.id}/`,
        data: {password}
        // headers: this.$store.getters.authHeader,
      })
        .then((res) => {
          console.log(res.data)
          // this.article = res.data
          this.$router.push({ name: 'AnonymousCommunityView' })
          alert('삭제 완료하였습니다.')
        })
        .catch((err) => {
          alert('비밀번호가 틀립니다.')
          console.log(err)
        })
    },
    putArticle(){
      const { id, title, content } = this.article;

    this.$router.push({
      name: 'AnonymousArticlePutView',
      params: {
        id: id,
        title: title,
        content: content,
        password: this.password
      }
    });
    }
}}
</script>

<style scoped>
.font_NanumMyeongjo{
  font-family: 'Nanum Myeongjo', serif;
}
.article-detail {
  background-color: #ffffff;
  color: #000000;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.5;
}

.article-title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
}

.article-title2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.article-info {
  font-size: 14px;
  color: #666666;
  margin-bottom: 5px;
}

.article-content {
  font-size: 16px;
  margin-top: 20px;
  border-top: 1px solid #dddddd;
  padding-top: 10px;
}

.article-content p {
  margin-bottom: 15px;
}

.article-content p:last-child {
  margin-bottom: 0;
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
</style>
