<template>
  <div>
    <div
      id="Live"
      class="player"
      data-property="{
          videoURL: 'https://www.youtube.com/watch?v=XyHr-s3MfCQ',
          mute: false,
          showControls: false,
          useOnMobile: true,
          quality: 'hd2160',
          containment: 'self',
          loop: true,
          autoPlay: true,
          stopMovieOnBlur: true, 
          startAt: 0,
          opacity: 1
        }"
      style="width: 1920px; height: 1080px"
    ></div>
    <div class="description" style="text-align: start;">
      <h1 style="font-size: 100px;">가디언즈 오브 갤럭시</h1>
      <h1>‘가모라’를 잃고 슬픔에 빠져 있던 ‘피터 퀼’이 </h1>
      <h1>위기에 처한 은하계와 동료를 지키기 위해 다시 한번 가디언즈 팀과 힘을 모으고,
</h1>
      <h1>성공하지 못할 경우 그들의 마지막이 될지도 모르는 미션에 나서는 이야기</h1>

    </div>
    </div>
</template>

<script>
export default {
    name : 'HeaderMovie',
    data(){
      return{
        articles : this.$store.state.articles
      }
    },
    created() {
    },
    methods : {

    },
    mounted() {
    // eslint-disable-next-line
    jQuery(function () {
      // eslint-disable-next-line
      jQuery("#Live").YTPlayer();
    });
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  },
}
</script>

<style>
#Live {
  z-index: -5;
}
.inline-YTPlayer {
  width: 1920px ;
  height: 1080px ;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
}

.YTPOverlay {
  width: 1920px !important;
  height: 1080px !important;
}

.description {
  position: absolute;
  top: 700px;
  left: 100px;
  color: white;
}
</style>