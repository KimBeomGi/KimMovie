<template>
    <div class="comment-item">
      <p class="comment-user">[익명]</p>
      <!-- <p class="comment-user">작성자: {{ comment.user }}</p> -->
      <p class="comment-date">{{ formatDateTime(comment.created_at) }}</p>
      <p class="comment-content">{{ comment.content }}</p>
    </div>
</template>
  
<script>
  export default {
    name: 'CommentViewItem',
    props: {
      comment: Object
    },
    methods: {
  formatDateTime(datetime) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const formattedDateTime = new Date(datetime).toLocaleString('en-US', options);
    return formattedDateTime.replace(',', '');
  }
}
  }
</script>
  
  <style scoped>
  .comment-item {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .comment-user {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .comment-date {
    font-size: 12px;
    color: #999;
    margin-bottom: 5px;
  }
  
  .comment-content {
    font-size: 14px;
    margin-bottom: 5px;
  }
  </style>
  