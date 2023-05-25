<template>
  <div style="background-color: #ffffff; color: #000000;">
    <div style="background-color: black; color: white; padding-bottom:20px">
    <br>
    <h1 style="font-weight: bold;">익명 게시판</h1>
 
    <button @click="Go_AnonymousCreateView" class="write-button" >글 작성</button>
    </div>
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
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* 버튼 폰트 크기 */
  width: 100px; /* 버튼 너비 */
  height: 30px; /* 버튼 높이 */
  text-align: center;
}

.write-button:hover {
  background-color: gray;
}



</style>