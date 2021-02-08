import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async testRequest(): Promise<void> {
      const res = await fetch('http://localhost:1337/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: 'hi', }),
      });
      console.log(res);
      return res.json();
    },
  },
  modules: {
  },
});
