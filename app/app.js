import Vue from 'nativescript-vue';
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue';
import Vuex from 'vuex';
import store from './store/index';
import router from './router/index';
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';



import App from './components/App';
import { onErrorResumeNext } from 'rxjs';

TNSFontIcon.debug = true;
TNSFontIcon.loadCss();

Vue.config.silent = !__DEV__

Vue.use(Vuex)
Vue.use(RadSideDrawer)
Vue.filter('fonticon', fonticon);

new Vue({
  store,
  router,
  render: h => h(App)
}).$start()
