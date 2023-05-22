<template>
  <div class="article-detail" style="text-align: start;">
    <label for="title" class="form-label">비밀번호 :</label>
      <input type="text" id="title" v-model.trim="password" class="form-input">

    <!-- <h1 class="article-title">{{ article?.movie_title }}</h1> -->
    <hr>
    <p class="article-title2">{{ article?.title }}</p>
    <!-- <span class="article-info">{{ article?.username }} | </span> -->
    <span class="article-info">{{ formatDateTime(article?.created_at) }}</span>
    <div class="article-content">
      <p>{{ article?.content }}</p>
    </div>
    <div style="display: flex;
  flex-direction: row;
  align-items: center;">
    <button @click="putArticle" class="put-button">수정</button>
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
          // console.log(this.$route.params.id)
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
          this.article = res.data
          this.$router.go(-1);
        })
        .catch((err) => {
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
      }
    });
    }
}}
</script>

<style scoped>
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
  margin-top: 20px;
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
  margin-top: 20px;
}

.put-button:hover {
  background-color: green;
}
</style>
