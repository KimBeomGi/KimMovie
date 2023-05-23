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
        <h1>{{ moviedetail?.title }}</h1>
        <hr>
        <p :class="{ 'overview-truncated': isOverviewTruncated }">
          {{ truncatedOverview }}
          <button v-if="isOverviewTruncated" @click="showFullOverview = !showFullOverview">
            {{ showFullOverview ? '숨기기' : '전체' }}
          </button>
        </p>
        <p>{{ moviedetail?.genres_name.join(' ') }}</p>
        <p>평점: {{ moviedetail?.vote_average }} / 10.0</p>
        <p>참여인원: {{ moviedetail?.vote_count }}명</p>
        <p>출시일자: {{ moviedetail?.release_date }}</p>
        <button  @click="toggleFavorite" >
      {{likebt}}
      </button>
      <span class="like-count">{{ like_users_num}}</span>
        <p></p>
        <router-link :to="{ name: 'HomeView' }" class="back-link">
          [메인으로]
        </router-link>
      </div>
    </div>
    <!-- 게시글을 생성하는 뷰인 CreateView로 이동하는 링크 생성-->
    <span class="action-buttons">
      <router-link :to="{ name: 'CreateView', params: { movie: movieId, movieTitle: movieTitle }}" class="create-link">글 작성</router-link>
    </span>
    
    
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
      like : '',
      like_users_num : ''
    };
  },
  computed: {
    likebt(){
      if (this.like){
        return '취소'
      }else{
        return '좋아요'
      }
    },
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
    },
    movieTitle(){
      return this.moviedetail?.title
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
          this.like_users_num = res.data.like_users.length
          this.like = res.data.is_liked
          // console.log(res)
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
    toggleFavorite(){
      axios({
        method: 'post',
        url: `http://localhost:8000/api/v1/like/${this.moviedetail?.id}/`,
        headers: this.$store.getters.authHeader,
      })
        .then((res) => {
          // this.$router.push({name:'CommunityView'})
          // this.$router.go(-1)
          this.like_users_num = res.data.like_users_num
          this.like = res.data.is_liked
          // console.log(res.data.is_liked)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(this.moviedetail?.id)
          console.log(err)
        })
    }
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

.like-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  width: 100px;
}

.like-button:hover {
  background-color: #0056b3;
}

.like-count {
  margin-left: 20px;
  margin-top: 15px;
  font-size: 30px;
  font-weight: bold;
  color:white
}
</style>