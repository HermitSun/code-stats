<template>
  <div class="audio-wrapper"
       style="z-index: 9999">
    <div :class="isPlay ? 'btn-audio-play' : 'btn-audio-pause'"
         @click="handleAudioPlay">
      <audio :src="require('assets/music/bach.mp3')"
             loop
             id="music">
      </audio>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Music',
    data () {
      return {
        isPlay: false
      }
    },
    methods: {
      // 处理音乐播放和暂停
      handleAudioPlay () {
        let m = document.getElementById('music')
        if (m.paused) {
          m.play()
          this.isPlay = true
        } else {
          m.pause()
          this.isPlay = false
        }
      }
    }
  }
</script>

<style lang="scss">
  .audio-wrapper {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 9999 !important;

    .btn-audio-play {
      background: url('../assets/images/pause.png') no-repeat center bottom;
      width: 96px;
      height: 96px;
      cursor: pointer;
      /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
      animation: btn-audio-rotate infinite 20s linear;
    }

    .btn-audio-pause {
      background: url('../assets/images/play.png') no-repeat center bottom;
      width: 96px;
      height: 96px;
      cursor: pointer;
      /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
    }
  }

  @keyframes btn-audio-rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
