<template>
  <div class="self-appraisal">
    <router-link :to="{name:'about'}" tag="div" class="pre"></router-link>
    <div class="title">
      <span v-for="(word, index) in '自我评价'.split('')" :key="index" :class="'jump-'+index">{{word}}</span>
    </div>
    <div class="content">
      <div class="shadow-container" v-html="selfAppraisal"></div>
    </div>
  </div>
</template>

<script>
import selfAppraisal from '../../public/self_appraisal';

export default {
  name: 'SelfAppraisal',
  data() {
    return {
      selfAppraisal,
    };
  },
};
</script>


<style scoped lang="scss">
  $pageThemeColor: #28272B;
  .self-appraisal {
    position: relative;
    width: 7.94rem;
    height: 11.23rem;
    background: $pageThemeColor;
    margin: .3rem auto;
    padding: .4rem .5rem;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .7), 0 0 30px -5px rgba(0, 0, 0, .7);
    border-top: 1px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .pre {
      $nextPageSize: .3;
      position: absolute;
      left: 0;
      top: 50%;
      z-index: 9;
      width: $nextPageSize + rem;
      height: $nextPageSize + rem;
      background: #fff;
      border-radius: 50%;
      cursor: pointer;
      transition: all .3s ease-in-out;
      transform: translate(-50%, -50%);

      &:hover {
        transform: translate(-50%, -50%) scale(1.3);
      }

      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        background: #fff;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: wave 1s infinite ease-in-out;
      }

      &:after {
        animation-delay: .3s;
      }

      @keyframes wave {
        from {
          width: $nextPageSize + rem;
          height: $nextPageSize + rem;
          opacity: 1;
        }
        to {
          width: $nextPageSize * 2 + rem;
          height: $nextPageSize * 2 + rem;
          opacity: 0;
        }
      }
    }

    .title {
      font-size: .48rem;
      color: #ccc;

      span {
        display: inline-block;
        margin: 0 .05rem;
        border-radius: .04rem;
        text-align: center;
        text-shadow: 0 1px 1px #857a68, 0px 0px 1px #fff;
        animation: jump-text infinite 3s ease-in-out;
      }

      @keyframes jump-text {
        0% {
          color: #ccc;
        }

        50% {
          color: #eee;
        }

        100% {
          color: #ccc;
        }
      }
      @for $i from 1 to 5 {
        span.jump-#{$i} {
          animation-delay: 500ms * $i;
        }
      }
    }
    .content{
      flex-grow: 1;
      overflow: hidden;
      .shadow-container{
        width: 100%;
        height: 100%;
        overflow: auto;
        box-sizing: content-box;
        padding-right: .13rem;
      }
    }
  }
</style>
<style scoped>
  .content >>>p{
    margin: 0;
    color: #aaa;
    text-align: left;
    line-height: 0.5rem;
  }
  .content >>>p span{
      font-size: .24rem !important;
  }
</style>
