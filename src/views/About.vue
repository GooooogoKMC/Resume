<template>
  <div class="about">
    <router-link :to="{name:'home'}" tag="div" class="pre"></router-link>
    <about-base/>
    <about-detail/>
    <router-link :to="{name:'appraisal'}" tag="div" class="forward"></router-link>
  </div>
</template>

<script>
import AboutBase from '../components/AboutBase.vue';
import AboutDetail from '../components/AboutDetail.vue';

export default {
  name: 'about',
  components: {
    AboutDetail,
    AboutBase,
  },
};
</script>

<style lang="scss" scoped>
  $pageThemeColor: #28272B;
  .about {
    position: relative;
    width: 7.94rem;
    height: 11.23rem;
    background: $pageThemeColor;
    margin: .3rem auto;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .7), 0 0 30px -5px rgba(0, 0, 0, .7);
    border-top: 1px solid transparent;

    .pre {
      left: 0;
      transform: translate(-50%, -50%);

      &:hover {
        transform: translate(-50%, -50%) scale(1.3);
      }
    }

    .forward {
      right: 0;
      transform: translate(50%, -50%);

      &:hover {
        transform: translate(50%, -50%) scale(1.3);
      }
    }

    .pre,
    .forward {
      $nextPageSize: .3;
      position: absolute;
      top: 50%;
      z-index: 9;
      width: $nextPageSize + rem;
      height: $nextPageSize + rem;
      background: #fff;
      border-radius: 50%;
      cursor: pointer;
      transition: all .3s ease-in-out;

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
  }
</style>
