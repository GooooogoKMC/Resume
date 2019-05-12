<template>
  <div class="home">
    <p class="title animated">RESUME</p>
    <div class="self">
      <div class="autodyne">
        <img src="../../public/img/head.png" alt="">
      </div>
      <div class="info">
        <p class="name">{{baseInfo.name}}</p>
        <p class="sub-name">{{baseInfo.nameEn}}</p>
        <p class="intention">求职意向：{{baseInfo.intention}}</p>
      </div>
      <router-link tag="div" :to="{name:'about'}" class="next-page"/>
    </div>
    <div class="contact">
      <div class="iconfont" :title="baseInfo.phone">&#xe848;{{baseInfo.phone}}</div>
      <div class="iconfont" :title="baseInfo.mail">&#xe832;{{baseInfo.mail}}</div>
      <div class="iconfont" :title="baseInfo.location">&#xe7a5;{{baseInfo.location}}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {},
  computed: {
    baseInfo() {
      return this.$store.getters.getBaseInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
  $pageThemeColor: #567180;
  $autodyneSize: 3;
  .home {
    width: 7.94rem;
    height: 11.23rem;
    background: #fff;
    margin: .3rem auto;
    border-radius: 3px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .7), 0 0 30px -5px rgba(0, 0, 0, .7);
    border-top: 1px solid transparent;

    .title {
      margin: 1rem auto 2.5rem;
      font-size: .6rem;
      font-weight: bold;
      color: #A8A8A8;
      text-align: center;
      font-family: "Andale Mono";
      background: url('../assets/text-bg.png') no-repeat;
      //noinspection CssInvalidPropertyValue
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      animation: moveBg 90s linear infinite;
      -webkit-animation: moveBg 90s linear infinite;
      @keyframes moveBg {
        0% {
          background-position: 0% 30%;
        }

        100% {
          background-position: 100% 50%;
        }
      }
    }

    .self {
      position: relative;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      background: $pageThemeColor;
      text-align: center;

      .autodyne {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: $autodyneSize + rem;
        height: $autodyneSize + rem;
        border: .04rem solid $pageThemeColor;
        padding: .2rem;
        border-radius: 50%;
        box-sizing: border-box;
        background: #fff;

        img {
          display: block;
          width: 100%;
          height: 100%;
          background: $pageThemeColor;
          border-radius: 50%;
          transition: all .3s linear;
          cursor: pointer;

          &:hover {
            transform: scale(1.01);
          }
        }
      }

      .info {
        margin-top: $autodyneSize/2 + .3 +rem;

        p {
          margin: .1rem;
        }

        .name {
          font-size: .5rem;
          font-weight: bold;
          color: #fff;
        }

        .sub-name {
          font-size: .2rem;
          color: #eee;
        }

        .intention {
          margin-bottom: .3rem;
          font-size: .3rem;
          color: #333;
        }
      }

      .next-page {
        $nextPageSize: .3;
        position: absolute;
        top: 50%;
        right: 0;
        width: $nextPageSize + rem;
        height: $nextPageSize + rem;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
        transform: translate(50%, -50%);
        transition: all .3s ease-in-out;

        &:hover {
          transform: translate(50%, -50%) scale(1.3);
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
    }

    .contact {
      margin-top: 2rem;
      font-size: .18rem;
      color: $pageThemeColor;

      .iconfont {
        width: 33.3%;
        float: left;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
