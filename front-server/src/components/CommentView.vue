<template>
    <div class="comment-view">
        <h1>{{ articleID }}</h1>
      <h3 class="comment-heading">댓글</h3>
      <div v-if="comments.length > 0">
        <ul class="comment-list">
        <CommentViewItem v-for="comment in comments" :key="comment.id" :comment="comment" />
      </ul>
      </div>
      <div v-else>
        <p class="no-comments">댓글이 없습니다.</p>
      </div>
    </div>
</template>
  
<script>
    import CommentViewItem from '@/components/CommentViewItem'
  import axios from 'axios'
  
  export default {
    name: 'CommentView',
    data() {
      return {
        comments: []
      }
    },
    props : {
        articleID : Number
    },
    components : {
        CommentViewItem
    },
    created() {
      this.getComments()
      setInterval(this.getComments, 1000);
    },
    
    methods: {
        getComments() {
    axios({
      method: 'get',
      url: 'http://localhost:8000/communities/comments/',
      headers: this.$store.getters.authHeader,
    })
      .then((res) => {
        const filteredComments = [];
        // 가져온 모든 댓글을 순회하면서 articleID와 comments.review를 비교
        res.data.forEach((comment) => {
          if (comment.review === this.articleID) {
            filteredComments.push(comment);
          }
        });

        // 필터링된 댓글 목록을 컴포넌트 데이터에 저장
        this.comments = filteredComments;

        // 컴포넌트를 다시 렌더링
        // this.$forceUpdate();
      })
          .catch((err) => {
            console.log(err)
          })
      },
      formatDateTime(datetime) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedDateTime = new Date(datetime).toLocaleString('en-US', options);
        return formattedDateTime.replace(',', '');
      }
    }
  }
  </script>
  
  <style scoped>
  .comment-view {
    margin-top: 20px;
  }
  
  .comment-heading {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .comment-list {
    list-style: none;
    padding: 0;
  }
  
  .comment-item {
    margin-bottom: 10px;
  }
  
  .comment-content {
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .comment-info {
    font-size: 12px;
    color: #666666;
  }
  
  .comment-author {
    margin-right: 5px;
  }
  
  .no-comments {
    font-size: 14px;
    color: #666666;
    margin-top: 10px;
  }
  </style>
  