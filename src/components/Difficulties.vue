<template>
  <div class="swiper-slide4">
    <div class="content">
      <div data-swiper-parallax="-100">
        <div class="font-huge">它们曾给你带来困扰……</div>
      </div>
      <div class="font-large"
           data-swiper-parallax="-200">
        <div class="split">
          <span class="font-important font-bold">{{latestCommit}}</span>
          ，是你最晚的一次提交。
        </div>
        <div class="split">
          <span class="font-important font-bold">{{mostFrequentCommit}}</span>
          ，是它让你肝到{{latestCommit.split(' ')[1]}}吗？
        </div>
        <div class="split">
          为了它，你一共提交了
          <span class="font-important font-bold">{{mostFrequentCommitTimes}}</span>
          次。
        </div>
        <div class="split">写代码虽好，但头发也很重要啊（笑）</div>
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
    name: 'Difficulties',
    data () {
      return {
        latestCommit: '', // 最晚提交
        mostFrequentCommit: '', // 提交最频繁的（拦路虎）
        mostFrequentCommitTimes: 0
      }
    },
    mounted () {
      this.latestCommit = '2019-06-19 01:30'
      this.mostFrequentCommit = 'edLineEditor'
      this.mostFrequentCommitTimes = 101
    }
  }
</script>

<style scoped lang="scss">
  .swiper-slide4 {
    background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
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
        margin-top: 10vh;
      }
    }
  }
</style>
