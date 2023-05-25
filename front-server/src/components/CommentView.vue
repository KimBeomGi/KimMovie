<template>
    <div class="comment-view">
      <div v-if="visibleComments.length > 0">
        <ul class="comment-list">
          <CommentViewItem v-for="comment in visibleComments" :key="comment.id" :comment="comment" :articleid="articleID" />
        </ul>
        <div class="pagination">
          <button v-for="pageNumber in pageCount" :key="pageNumber" @click="goToPage(pageNumber)">{{ pageNumber }}</button>
        </div>
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
        comments: [],
        currentPage: 1,
        pageSize: 5,
      }
    },
    props: {
      articleID: Number,
    },
    components: {
      CommentViewItem,
    },
    created() {
      this.getComments()
    },
    computed: {
      visibleComments() {
        const start = (this.currentPage - 1) * this.pageSize
        const end = start + this.pageSize
        return this.comments
          .filter((comment) => comment.review === this.articleID)
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(start, end)
      },
      pageCount() {
        return Math.ceil(
          this.comments.filter((comment) => comment.review === this.articleID).length / this.pageSize
        )
      },
      
    },
    methods: {
      getComments() {
        axios({
          method: 'get',
          url: 'http://localhost:8000/communities/comments/',
          headers: this.$store.getters.authHeader,
        })
        .then((res) => {
            this.comments = res.data
//   this.$router.push({ name: 'NoneView' })
//   this.$nextTick(() => {
    // this.$router.push({ name:'ArticleDetailView', 
    //   params: {id: this.articleID}})
//   })
})

          .catch((err) => {
            console.log(err)
          })
      },
      formatDateTime(datetime) {
        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }
        const formattedDateTime = new Date(datetime).toLocaleString('en-US', options)
        return formattedDateTime.replace(',', '')
      },
      goToPage(pageNumber) {
        this.currentPage = pageNumber
      },
    },
  }
  </script>
  
  <style scoped>
  .comment-view {
    margin-top: 20px;
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
  
  .pagination {
    margin-top: 20px;
    margin-right: 0px;
    background-color: white;
  }
  
  .pagination button {
    display: inline-block;
    /* margin-right: 10px; */
    margin-left: 10px;
    padding: 5px 10px;
    background-color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
  }
  
  .pagination button:hover {
    background-color: #e0e0e0;
  }
  </style>
  