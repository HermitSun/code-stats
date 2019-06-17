<template>
  <div class="audio-wrapper">
    <div :class="isPlay ? 'btn-audio-play' : 'btn-audio-pause'"
         @click="handleAudioPlay">
      <audio :src="require('assets/music/bach.mp3')"
             autoplay
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
        isPlay: true
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

<style scoped lang="scss">
  .audio-wrapper {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    .btn-audio-play {
      position: absolute;
      top: 25px;
      right: 25px;
      background: url('../assets/images/pause.png') no-repeat center bottom;
      width: 64px;
      height: 64px;
      z-index: 999;
      cursor: pointer;
      animation: btn-audio-rotate infinite 20s linear;
    }

    .btn-audio-pause {
      position: absolute;
      top: 25px;
      right: 25px;
      background: url('../assets/images/play.png') no-repeat center bottom;
      width: 64px;
      height: 64px;
      cursor: pointer;
      z-index: 999;
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
