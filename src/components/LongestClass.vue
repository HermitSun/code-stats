<template>
  <div class="swiper-slide3">
    <div class="content">
      <div data-swiper-parallax="-100">
        <div class="font-huge">你知道吗？</div>
      </div>
      <div class="font-large"
           data-swiper-parallax="-200">
        <div class="split">你写的最长的一个类，长达
          <span class="font-important font-bold">{{maxClassLength}}</span>
          行
        </div>
      </div>
      <img :src="require('assets/images/logo.png')"
           class="image"
           data-swiper-parallax="-300"
           alt="logo"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Most',
    data () {
      return {
        maxClassLength: 0 // 最长的类
      }
    },
    mounted () {
      this.maxClassLength = 200
    }
  }
</script>

<style scoped lang="scss">
  .swiper-slide3 {
    background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
    height: 100vh;

    .content {
      padding-top: 10vh;

      .font-huge {
        font-size: 40px;
      }

      .font-large {
        text-align: left;
        margin-top: 10vh;
        margin-left: 20vw;

        .split {
          margin-top: 2vh;
        }
      }

      .image {
        margin-top: 10vh;
      }
    }
  }
</style>
