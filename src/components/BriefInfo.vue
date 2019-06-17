<template>
  <div class="swiper-slide1">
    <div class="content">
      <div data-swiper-parallax="-100">
        <div class="font-huge">欢迎来到</div>
        <div class="font-huge">SEEC</div>
      </div>
      <div class="font-large"
           data-swiper-parallax="-200">
        <div class="split">{{name}}，</div>
        <div class="split">你第一次提交代码是在
          <span class="font-important font-bold">{{firstDate}}</span>
        </div>
        <div class="split">你最后一次提交代码是在
          <span class="font-important font-bold">{{lastDate}}</span>
        </div>
        <div class="split">你已经来到这里
          <span class="font-important font-bold">{{interval}}</span>
          天了
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
    name: 'BriefInfo',
    data () {
      return {
        name: '',
        firstDate: '',
        lastDate: ''
      }
    },
    computed: {
      // 时间间隔
      interval () {
        return new Date(this.lastDate).getDay() - new Date(this.firstDate).getDay() + 1
      }
    },
    mounted () {
      this.name = '孙文'
      this.firstDate = '2019-06-17'
      this.lastDate = '2019-06-17'
    }
  }
</script>

<style scoped lang="scss">
  .swiper-slide1 {
    background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
    height: 100vh;

    .content {
      padding-top: 10vh;

      .font-huge {
        font-size: 40px;
      }

      .font-large {
        text-align: left;
        margin-top: 10vh;
        margin-left: 15vw;

        .split {
          margin-top: 2vh;
        }
      }

      .image {
        margin-top: 50px;
      }
    }
  }
</style>
