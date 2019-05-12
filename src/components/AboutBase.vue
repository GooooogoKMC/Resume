<template>
  <div class="base">
    <div class="header">
      <img src="../../public/img/head.png" alt="" class="profile">
      <p class="name">{{baseInfo.name}}</p>
      <p class="intention">求职意向:{{baseInfo.intention}}</p>
      <p class="other-text">RESUME</p>
    </div>
    <div class="lead">
      <div class="triangle"/>
      <div class="bloc">
        <div class="title theme-select">专业技能</div>
        <div class="content professional-skill">
          <div v-for="item in professionalSkill" :key="item.code">
            <div class="skill-icon iconfont-code" v-html="item.code"></div>
            <div class="skill-name theme-select">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="bloc">
        <div class="title theme-select">基本信息</div>
        <div class="content">
          <div class="line">
            <div class="iconfont-code icon theme-select">&#xe668;</div>
            <div class="tale theme-select">{{baseInfo.birth}}</div>
          </div>
          <div class="line">
            <div class="iconfont icon theme-select">&#xe848;</div>
            <div class="tale theme-select">{{baseInfo.phone}}</div>
          </div>
          <div class="line">
            <div class="iconfont icon theme-select">&#xe832;</div>
            <div class="tale theme-select">{{baseInfo.mail}}</div>
          </div>
          <div class="line">
            <div class="iconfont icon theme-select">&#xe7a5;</div>
            <div class="tale theme-select">{{baseInfo.location}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutBase',
  data() {
    return {
      professionalSkill: [{
        name: 'JavaScript',
        code: '&#xe658;',
      }, {
        name: 'Vue',
        code: '&#xe60c;',
      }, {
        name: 'TS',
        code: '&#xe608;',
      }, {
        name: 'PHP',
        code: '&#xe809;',
      }, {
        name: 'Sass',
        code: '&#xe688;',
      }, {
        name: 'Nginx',
        code: '&#xe62e;',
      }, {
        name: 'MySQL',
        code: '&#xe69b;',
      }, {
        name: 'Apache',
        code: '&#xe657;',
      }, {
        name: 'H5',
        code: '&#xe60f;',
      }, {
        name: 'PR',
        code: '&#xe655;',
      }, {
        name: 'Flutter',
        code: '&#xe6e5;',
      }, {
        name: 'GitHub',
        code: '&#xe602;',
      }, {
        name: 'PS',
        code: '&#xe60b;',
      }, {
        name: '小程序',
        code: '&#xe7ad;',
      }, {
        name: 'Git',
        code: '&#xe601;',
      }, {
        name: 'SVN',
        code: '&#xe63e;',
      }, {
        name: 'Android',
        code: '&#xe749;',
      }, {
        name: 'Linux',
        code: '&#xe617;',
      }, {
        name: 'Electron',
        code: '&#xe610;',
      }, {
        name: 'Echarts',
        code: '&#xe611;',
      }, {
        name: 'Python',
        code: '&#xe612;',
      }],
    };
  },
  computed: {
    baseInfo() {
      return this.$store.getters.getBaseInfo;
    },
  },
};
</script>

<style scoped lang="scss">
  $pageThemeColor: #28272B;
  $pageSubThemeColor: #AC9C79;
  $pageSubThemeColorDeep: #7f7058;
  $baseWidth: 2.9;
  $baseLeadBeforeHeight: .4;
  $baseLeadLeft: .3;
  .theme-select::selection {
    background: $pageThemeColor;
    color: #fff;
  }

  .base {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: $baseWidth + rem;

    .header {
      position: relative;
      margin: 0.4rem 0 0 0.3rem;
      text-align: center;
      color: #fff;

      img {
        display: block;
        width: 2rem;
        height: 2rem;
        margin: 0 auto;
        border-radius: .3rem;
      }

      .name {
        font-size: .48rem;
        margin: .1rem 0;
      }

      .intention {
        font-size: .18rem;
        margin: 0;
      }

      .other-text {
        font-size: .18rem;
        font-weight: bold;
        color: #fff;
        position: absolute;
        left: -0.4rem;
        top: 0.65rem;
        transform: rotate(90deg);
      }
    }

    .lead {
      $bottomOverFlow: .1;
      position: absolute;
      top: 3.5rem;
      right: 0;
      bottom: -$bottomOverFlow + rem;
      left: $baseLeadLeft + rem;
      padding-top: $baseLeadBeforeHeight * 2 + rem;
      background: $pageSubThemeColor;

      &:before,
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        width: 0;
        height: 0;
      }

      &:before {
        left: 0;
        transform: translate(-$bottomOverFlow + rem);
        border-top: $bottomOverFlow / 2 + rem solid $pageSubThemeColorDeep;
        border-right: $bottomOverFlow / 2 + rem solid $pageSubThemeColorDeep;
        border-bottom: $bottomOverFlow / 2 + rem solid transparent;
        border-left: $bottomOverFlow / 2 + rem solid transparent;
      }

      &:after {
        right: 0;
        transform: translate($bottomOverFlow + rem);
        border-top: $bottomOverFlow / 2 + rem solid $pageSubThemeColorDeep;
        border-right: $bottomOverFlow / 2 + rem solid transparent;
        border-bottom: $bottomOverFlow / 2 + rem solid transparent;
        border-left: $bottomOverFlow / 2 + rem solid $pageSubThemeColorDeep;
      }

      .triangle {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 0;
        height: 0;
        border-top: $baseLeadBeforeHeight + rem solid $pageThemeColor;
        border-right: ($baseWidth - $baseLeadLeft) / 2 + rem solid $pageThemeColor;
        border-bottom: $baseLeadBeforeHeight + rem solid transparent;
        border-left: ($baseWidth - $baseLeadLeft) / 2 + rem solid transparent;
      }

      .bloc {
        color: $pageThemeColor;
        margin-bottom: .2rem;

        .title {
          font-size: .36rem;
          font-weight: bold;
          text-align: center;
        }

        .content {
          font-size: .16rem;
          padding: .1rem;

          &.professional-skill {
            display: grid;
            grid-template-columns: 33.3% 33.3% 33.3%;
            grid-template-rows: auto;
            grid-row-gap: .1rem;

            .skill-icon {
              user-select: none;
              font-size: .28rem;
              cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAflBMVEUAAAAAAADd3d3KysoAAAD////V1dUAAAClpaXPz88vLy8AAAD4+PgAAAAAAABSUlLq6upeXl55eXkAAACLi4sAAAAAAAAAAAAPDw8WFhb8/Pzw8PC7u7u5ubktLS2enp43NzdxcXGVlZUAAAAAAAAAAAAAAAAAAAD///8AAABQSh+wAAAAKHRSTlMA+MjB7Pq9QL/E3Lff39DNy8rEv7KjbxXy7ejOwMDAv760soBaMSEJ3P0nywAAAJdJREFUGNNtz9cOwyAMhWET3IwmzW7SvYfP+79gLVVCCeS/gk9GALleXUJ+HwCBlnup4NmIWlb+aG5EBMPMvshEDt7kFjqYwW3ZGGZYqXaArs1Gx3Hp+0eqh+31bFOtQUI4itwKmbQuCbE+5TTD/I92ihhCLPAOMQOF2HKIeo9iLYJogngq3mOLNnI1GIk61p+xcXFCy/0Axbkc78JFDG8AAAAASUVORK5CYII="), default;
            }

            .skill-name {
            }
          }

          .line {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: .18rem;
            margin-bottom: .15rem;

            .icon {
              font-size: .18rem;
            }

            .tale {
              padding-left: .1rem;
            }
          }
        }
      }
    }
  }
</style>
