<template>
  <div id="app">
    <!--<div id="nav">-->
    <!--<router-link to="/">Home</router-link>-->
    <!--|-->
    <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <div id="content">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    <div id="zoom">
      <div class="iconfont" @click="zoomIn">&#xe98c;</div>
      <div class="iconfont" @click="zoomOut">&#xe987;</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      base: 1920,
      zoomRatio: 1,
      resizeEvt: 'orientationchange' in window ? 'orientationchange' : 'resize',
      Html: document.getElementsByTagName('html')[0],
    };
  },
  computed: {
    baseCompute() {
      return this.base * this.zoomRatio;
    },
  },
  watch: {
    zoomRatio() {
      this.changePage();
    },
  },
  methods: {
    zoomIn() {
      if (this.zoomRatio > 0.6) {
        this.zoomRatio -= 0.05;
      }
    },
    zoomOut() {
      if (this.zoomRatio < 1.5) {
        this.zoomRatio += 0.05;
      }
    },
    getRatio() {
      const d = document;
      const p = Number(((d.body && d.body.clientWidth) || this.Html.offsetWidth) / this.baseCompute)
        .toFixed(3);
      if (p < 1.067) {
        if (p > 0.5) {
          return p;
        }
        return 0.5;
      }
      return 1.067;
    },
    changePage() {
      this.Html.style.fontSize = `${this.getRatio() * 100}px`;
    },
  },
  created() {
    this.changePage();
    if (!document.addEventListener) return;
    window.addEventListener(this.resizeEvt, this.changePage, false);
    document.addEventListener('DOMContentLoaded', this.changePage, false);
  },
  mounted() {
    setTimeout(() => {
      this.Html.style.transition = 'all .3s linear';
    }, 300);
  },
  destroyed() {
    if (!document.addEventListener) return;
    window.removeEventListener(this.resizeEvt, this.changePage);
    document.removeEventListener('DOMContentLoaded', this.changePage);
  },
};
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333;

    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-repeat: repeat;
    background-image: linear-gradient(90deg, rgba(0, 99, 103, 0.76), rgba(66, 142, 146, 0.76),
      rgba(0, 54, 58, 0.76), rgba(1, 87, 155, 0.76), rgba(49, 27, 146, 0.76),
      rgba(136, 14, 79, 0.76), rgba(201, 122, 26, 0.75), rgba(194, 53, 45, 0.75),
      rgba(63, 81, 181, 0.75), rgba(0, 96, 100, 0.76));
    /*background-image: linear-gradient(90deg, #006064, #428e92,*/
    /*#00363a, #01579b, #311b92, #880e4f,*/
    /*#c97a1a, #c2352d, #3f51b5, #006064);*/
    background-attachment: fixed;
    background-size: 5000% 5000%;
    animation: backgroundColorChange 2400s normal infinite linear;
    @keyframes backgroundColorChange {
      from {
        background-position: 5000% 5000%;
      }
      to {
        background-position: 0 0;
      }
    }

    #content {
      position: relative;
      min-width: 960px;

      .fade-enter-active,
      .fade-leave-active {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        transition: all .7s ease-in-out;
      }

      .fade-enter {
        transform: translateX(5%);
        opacity: 0;
      }

      .fade-leave-to {
        transform: translateX(-5%);
      }

      .fade-leave-active {
        opacity: 0;
      }
    }

    #zoom{
      position: fixed;
      right: 20px;
      bottom: 30px;
      .iconfont{
        $size: 50;
        background: #fff;
        width: $size + px;
        height: $size + px;
        margin: 20px 0;
        border-radius: 50%;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
        line-height: $size + px;
        text-align: center;
        color: #666;
        font-size: $size / 2 + px;
        cursor: pointer;
        transition: all .3s ease;
        user-select: none;
        &:hover{
          transform: scale(1.03);
        }
      }
    }
  }
</style>
