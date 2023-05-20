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
    <p>영화 번호 : {{ moviedetail?.id }}</p>
    <p>제목 : {{ moviedetail?.title }}</p>
    <p :class="{ 'overview-truncated': isOverviewTruncated }">
      줄거리 : {{ truncatedOverview }}
      <button v-if="isOverviewTruncated" @click="showFullOverview = !showFullOverview">
        {{ showFullOverview ? '숨기기' : '전체' }}
      </button>
    </p>
    <p>장르 : {{ moviedetail?.genres }}</p>
    <p>평점 : {{ moviedetail?.vote_average }} / 10.0</p>
    <p>참여인원 : {{ moviedetail?.vote_count }}명</p>
    <p>출시일자 : {{ moviedetail?.release_date }}</p>
    <router-link :to="{ name: 'HomeView' }">
      [뒤로가기]
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MovieDetailView',
  components: {},
  data() {
    return {
      moviedetail: null,
      moviekey: '',
      showFullOverview: false,
      maxOverviewLength: 200,
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
  },
  created() {
    this.getMovieDetail();
    console.log(this.$route.params.id);
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
        })
        .catch((err) => {
          // alert('에러')
          alert('실패');
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.overview-truncated {
  margin-left: 600px;
  margin-right: 600px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

iframe {
  width: 100%;
  height: 600px;
}

button {
  margin-top: 10px;
}
</style>
