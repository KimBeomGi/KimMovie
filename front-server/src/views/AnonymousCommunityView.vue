<template>
  <div style="background-color: #ffffff; color: #000000;">
    <h1>익명 게시판</h1>
    <button @click="Go_AnonymousCreateView" class="write-button" >작성</button>
    <AnonymousArticleList/>
    
    
  </div>
</template>

<script>
// ArticleList를 불러와서
// import ArticleView from '@/components/ArticleView.vue'
import AnonymousArticleList from '@/components/AnonymousArticleList.vue'

export default {
  name: 'AnonymousCommunityView',
  components: {
    // 등록한다.
    // ArticleView,
    AnonymousArticleList
  },
  computed:{
    // isLogin() {
    //   return this.$store.getters.isLogin // 로그인 여부
    // }
  },
  created() {
    // 화면이 켜지면 getArticles 메서드를 실행한다.
    this.$store.dispatch('getAnonymousArticles')
  },
  methods: {
    Go_AnonymousCreateView(){
    this.$router.push({
      name: 'AnonymousCreateView',
    });
  }
  }
  }

</script>

<style scoped>
.write-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.write-button:hover {
  background-color: #45a049;
}



</style>