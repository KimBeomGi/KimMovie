<template>
  <div class="article-detail" style="text-align: start;">
    <h1 class="article-title">{{ article?.movie_title }}</h1>
    <hr>
    <p class="article-title2 font_NanumMyeongjo">{{ article?.title }}</p>
    <button @click="Go_Profile" class=" profile-button">{{ article?.username }}</button>
    <span class="article-info">{{ date }}</span>
    <div class="article-content">
      <p>{{ article?.content }}</p>
    </div>
    <div style="display: flex; flex-direction: row; align-items: center;">
    <button  @click="putArticle" class="put-button">수정</button>
    <button @click="deleteArticle" class="delete-button">삭제</button>
    </div>
    <hr>
    <div style="display: flex; flex-direction: row; align-items: center;">
      <button @click="toggleLike"  class="like-button">
        {{likebt}}
      </button>
      <span class="like-count">{{ like_users_num}}</span>
    </div>
    <hr>
    <CommentCreate :articleID="article?.id"/>
    <CommentView :articleID="article?.id" />
  </div>
</template>

<script>
import CommentView from '@/components/CommentView'
import CommentCreate from '@/components/CommentCreate'
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'ArticleDetailView',
  components:{
    CommentView,
    CommentCreate
  },
  data() {
    return {
      article: null,
      likeCount: '',
      like_users_num : '',
      date : '',
      like : true,
      sameuser : ''
    }
  },  

  created() {
    this.getArticleDetail()

  },
  computed:{
    likebt(){
      if (this.like){
        return '좋아요 취소'
      }else{
        return '좋아요'
      }
    }
  },
  methods: {
    getArticleDetail() {
      axios({
        method: 'get',
        url: `http://localhost:8000/communities/${this.$route.params.id}/`,
        headers: this.$store.getters.authHeader,
      })
        .then((res) => {
          // console.log(res.data)
          this.article = res.data
          this.like_users_num = res.data.like_users.length
          this.date = moment(res.data.article?.created_at).format('YYYY년 MM월 DD일')
          this.like = res.data.is_liked
          this.sameuser = res.data.same_user
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
      axios({
        method: 'DELETE',
        url: `http://localhost:8000/communities/${this.$route.params.id}/`,
        headers: this.$store.getters.authHeader,
      })
        .then((res) => {
          console.log(res.data)
          this.article = res.data
          this.$router.go(-1);
          alert('삭제 완료하였습니다.')
        })
        .catch((err) => {
          alert('타인의 게시물은 삭제할 수 없습니다.')
          console.log(err)
        })
    },
    putArticle() {
      if(this.sameuser){
    const { id, movie, title, content } = this.article;
    this.$router.push({
      name: 'ArticlePutView',
      params: {
        id: id,
        movie:movie,
        title: title,
        content: content,
      }
    })}else{
      alert('타인의 게시물은 수정할 수 없습니다.')
    }
  },
  toggleLike() {
      axios({
        method: 'post',
        url: `http://localhost:8000/communities/${this.article.id}/like/`,
        headers: this.$store.getters.authHeader,
      })
        .then((res) => {
          // this.$router.push({name:'CommunityView'})
          // this.$router.go(-1)
          this.like_users_num = res.data.like_users_num
          this.like = res.data.is_liked
          // console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    Go_Profile(){
    this.$router.push({name:'ProfileView', params:{id : this.article?.user}})
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
  margin-left: 10px;
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

/* 좋아요 버튼 스타일 */
.like-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  width: 130px;
}

.like-button:hover {
  background-color: rgb(117, 5, 5);
}

/* 좋아요 수 표시 스타일 */
.like-count {
  margin-left: 20px;
  margin-top: 15px;
  font-size: 30px;
  font-weight: bold;
}

.profile-button {
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.profile-button:hover {
  background-color: gray;
}
</style>
