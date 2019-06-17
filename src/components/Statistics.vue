<template>
  <div class="swiper-slide2">
    <div class="content">
      <div data-swiper-parallax="-100">
        <div class="font-huge">在你奋斗的日子里……</div>
      </div>
      <div class="font-large"
           data-swiper-parallax="-200">
        <div class="split">你一共做了
          <span class="font-important font-bold">{{total}}</span>
          道题目，
        </div>
        <div class="split">其中有
          <span class="font-important font-bold">{{javaTotal}}</span>
          道Java题，
          <span class="font-important font-bold">{{pythonTotal}}</span>
          道Python题
        </div>
        <div class="split">你一共写了
          <span class="font-important font-bold">{{lines}}</span>
          行代码，提交了
          <span class="font-important font-bold">{{commits}}</span>
          次
        </div>
        <div class="split">你的平均分数是
          <span class="font-important font-bold">{{averageScore}}</span>
          分
        </div>
        <div class="split">
          这只是你的一小步，加油！
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
    name: 'Statistics',
    data () {
      return {
        total: 0,
        javaTotal: 0,
        pythonTotal: 0,
        commits: 0,
        lines: 0,
        averageScore: 0
      }
    },
    mounted () {
      this.total = 40
      this.javaTotal = 20
      this.pythonTotal = 20
      this.commits = 200
      this.lines = 4000
      this.averageScore = 100
    }
  }
</script>

<style scoped lang="scss">
  .swiper-slide2 {
    background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);
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
        margin-top: 8vh;
      }
    }
  }
</style>
