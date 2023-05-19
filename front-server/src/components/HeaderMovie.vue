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
          stopMovieOnBlur: false, 
          startAt: 0,
          opacity: 1
        }"
      style="width: 2560px; height: 1440px"
    ></div>
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
  width: 2560px ;
  height: 1440px ;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
}

.YTPOverlay {
  width: 2560px !important;
  height: 1440px !important;
}
</style>