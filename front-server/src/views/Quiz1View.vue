<template>
  <div>

    <p style="font-size: 80px; margin-top: 300px;">Q. {{ question }}</p>

    <div class="d-flex justify-content-evenly" style="margin-top: 100px;">
      
    <button class="cancel-button" @click="choose1">1. {{ option1 }}</button>
    <button class="cancel-button" @click="choose2">2. {{ option2 }}</button>
    <button class="cancel-button" @click="choose3">3. {{ option3 }}</button>
  </div>
  <p style="margin-top:100px; color:black;">{{ answer }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name : 'Quiz1View',
  data(){
    return{
      question : '',
      option1 : '',
      option2 : '',
      option3 : '',
      answer : '',
      id : ''

    }
  },
  computed:{

  },
  created(){
    this.getQuiz1()
  },
  methods:{
    getQuiz1() {
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/v1/quiz1/',
        headers: this.$store.getters.authHeader,
      })
      .then((res)=>{  
        this.question = res.data.question
        // console.log(res.data)
        this.option1 = res.data.options[0]
        this.option2 = res.data.options[1]
        this.option3 = res.data.options[2]
        this.id = res.data.id
        this.answer = res.data.answer
        
      })
      .catch(()=>{
        this.$router.go(-1)
        alert('포인트가 부족합니다! 게시글을 작성하거나 댓글을 달면 포인트를 획득할 수 있습니다.')
        
      })
    },
    choose1(){
      const solve = this.option1
      const quiz_id = this.id
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/v1/quiz1/',
        headers: this.$store.getters.authHeader,
        data: {solve, quiz_id}
      })
      .then((res)=>{
        if (res.data.message==='오답입니다!'){
          alert(`오답입니다 ㅠㅠ 50포인트를 잃습니다.\n정답은 ${this.answer}!\n이전 화면으로 돌아갑니다.`)
        }else{
        alert('정답입니다! 100포인트를 얻습니다.\n이전 화면으로 돌아갑니다.')}
        this.$router.go(-1)
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
        this.getQuiz1()
      })
        
    },
    choose2(){
      const solve = this.option2
      const quiz_id = this.id
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/v1/quiz1/',
        headers: this.$store.getters.authHeader,
        data: {solve,quiz_id}
      })
      .then((res)=>{
        if (res.data.message==='오답입니다!'){
          alert(`오답입니다 ㅠㅠ 50포인트를 잃습니다.\n정답은 ${this.answer}!\n이전 화면으로 돌아갑니다.`)
        }else{
          alert('정답입니다! 100포인트를 얻습니다.\n이전 화면으로 돌아갑니다.')}
        this.$router.go(-1)
        console.log(res)
      })
      .catch((err)=>{
        alert('틀렸습니다. ㅠㅠ')
        console.log(err)
        this.getQuiz1()
      })
    },
    choose3(){
      const solve = this.option3
      const quiz_id = this.id
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/v1/quiz1/',
        headers: this.$store.getters.authHeader,
        data: {solve,quiz_id}
        
      })
      .then((res)=>{
        if (res.data.message==='오답입니다!'){
          alert(`오답입니다 ㅠㅠ 50포인트를 잃습니다.\n정답은 ${this.answer}!\n이전 화면으로 돌아갑니다.`)
        }else{
          alert('정답입니다! 100포인트를 얻습니다.\n이전 화면으로 돌아갑니다.')}
        this.$router.go(-1)
        console.log(res)
      })
      .catch((err)=>{
        alert('틀렸습니다. ㅠㅠ')
        console.log(err)
        this.getQuiz1()
      })

    }
  }
}
</script>

<style>
.cancel-button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 30px; /* 버튼 폰트 크기 */
  width: 400px; /* 버튼 너비 */
  height: 100px; /* 버튼 높이 */
}

.cancel-button:hover {
  background-color: rgb(98, 6, 6);
}
</style>