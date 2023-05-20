<template>
  <div class="article-detail">
    <p class="article-info">글 번호: {{ article?.id }}</p>
    <h2 class="article-title">{{ article?.title }}</h2>
    <p class="article-info">작성자: {{ article?.username }}</p>
    <div class="article-content">
      <p>{{ article?.content }}</p>
    </div>
    <p class="article-info">작성시간: {{ article?.created_at }}</p>
    <p class="article-info">수정시간: {{ article?.updated_at }}</p>
    <p class="article-info">영화 ID: {{ article?.movie }}</p>
    <router-link :to="{ name: 'CommunityView' }">
      [뒤로가기]
    </router-link>
  </div>
</template>

<style scoped>
.article-detail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.article-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.article-info {
  margin-bottom: 5px;
}

.article-content {
  margin-bottom: 15px;
}
</style>

<script>
import axios from 'axios'

export default {
  name: 'ArticleDetailView',
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
        url: `http://localhost:8000/communities/${this.$route.params.id}/`,
        headers: this.$store.getters.authHeader,
      })
        .then((res) => {
          this.article = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
