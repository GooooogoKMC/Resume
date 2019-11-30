import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseInfo: {
      name: '刘志达',
      nameEn: 'GoogoKMChi',
      intention: '前端工程师',
      phone: '13702003650',
      mail: 'GoogoKMChi@gmail.com',
      location: '成都市温江区',
      birth: '1993.05.20',
    },
  },
  getters: {
    getBaseInfo: state => state.baseInfo,
  },
  mutations: {},
  modules: {},
});
