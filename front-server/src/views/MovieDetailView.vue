<template>
  <div style="background-color: black; color: #ffffff;">
    <div>
      <iframe
        id="inlineFrameExample"
        :src="moviekey"
        width="1920"
        height="1080"
      ></iframe>
    </div>
    <div class="container">
      <div class="poster" v-if="moviedetail">
        <img :src="poster" alt="">
      </div>
      <div class="details">
        <p>영화 번호: {{ moviedetail?.id }}</p>
        <p>제목: {{ moviedetail?.title }}</p>
        <p :class="{ 'overview-truncated': isOverviewTruncated }">
          줄거리: {{ truncatedOverview }}
          <button v-if="isOverviewTruncated" @click="showFullOverview = !showFullOverview">
            {{ showFullOverview ? '숨기기' : '전체' }}
          </button>
        </p>
        <p>장르: {{ moviedetail?.genres }}</p>
        <p>평점: {{ moviedetail?.vote_average }} / 10.0</p>
        <p>참여인원: {{ moviedetail?.vote_count }}명</p>
        <p>출시일자: {{ moviedetail?.release_date }}</p>
        <router-link :to="{ name: 'HomeView' }" class="back-link">
          [뒤로가기]
        </router-link>
      </div>
    </div>
    <!-- 게시글을 생성하는 뷰인 CreateView로 이동하는 링크 생성-->
    <div class="action-buttons">
      <router-link :to="{ name: 'CreateView', params: { movie: movieId }}" class="create-link">글 작성</router-link>
    </div>
    <DetailArticleList :movie_id="moviedetail?.id"/>
  </div>
</template>

<script>
import DetailArticleList from '@/components/DetailArticleList.vue'
import axios from 'axios';

export default {
  name: 'MovieDetailView',
  components: {DetailArticleList},
  data() {
    return {
      moviedetail: null,
      moviekey: '',
      showFullOverview: false,
      maxOverviewLength: 200,
      poster : '',
    };
  },
  computed: {
    truncatedOverview() {
      return this.showFullOverview
        ? this.moviedetail?.overview
        : this.moviedetail?.overview.slice(0, this.maxOverviewLength) + '...';
    },
    isOverviewTruncated() {
      return this.moviedetail?.overview.length > this.maxOverviewLength;
    },
    movieId(){
      return this.moviedetail?.id
    }
  },
  created() {
    this.getMovieDetail();
    this.scrollToTop()
  },
  methods: {
    getMovieDetail() {
      axios({
        method: 'get',
        url: `http://localhost:8000/api/v1/${this.$route.params.id}/`,
        headers: this.$store.getters.authHeader,
      })
        .then((res) => {
          this.moviedetail = res.data;
          this.moviekey = `https://www.youtube.com/embed/${res.data.key}`;
          this.poster = 'https://image.tmdb.org/t/p/w500' + res.data.poster_path;
        })
        .catch((err) => {
          // alert('에러')
          alert('실패');
          console.log(err);
        });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.overview-truncated {
  margin-left: 200px;
  margin-right: 200px;
}
.container {
  max-width: 2000px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
}

iframe {
  width: 100%;
  height: 600px;
}

button {
  margin-top: 10px;
}

.poster {
  flex: 1;
  text-align: center;
  position: sticky;
  top: 20px;
}

.poster-image {
  width: 200px;
}

.details {
  flex: 1;
  margin-left: 20px;
}

.back-link {
  color: #ffffff;
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;
  border: 1px solid #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
}

.action-buttons {
  margin-top: 20px;
  text-align: center;
}

.create-link {
  color: #ffffff;
  text-decoration: none;
  background-color: #4caf50;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.create-link:hover {
  background-color: #45a049;
}
</style>