import Vue from 'nativescript-vue';
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue';
import Vuex from 'vuex';
import store from './store/index';
import router from './router/index';
Vue.use(Vuex)
Vue.use(RadSideDrawer)

import App from './components/App';

Vue.config.silent = !__DEV__

new Vue({
  store,
  router,
  render: h => h(App)
}).$start()
