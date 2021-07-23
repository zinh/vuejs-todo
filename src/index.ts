import Vue from 'vue';
import App from './components/App';
import Vuex from 'vuex';

Vue.use(Vuex);
import store from './store';

new Vue({
  el: '#app',
  render: createElement => createElement(App),
  store
});
