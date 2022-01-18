import Vue from "nativescript-vue";
import { createRouter } from "nativescript-vue-router-extended";
import Home from '../components/Home';
import Browser from '../components/Browse';
import Profile from '../components/Profile';

const routes = [
  {
    path: "/home",
    component: Home,

    // Optional
    meta: {
      isVertical: true,
      // Example actions to dispatch automatically when page is visited
      // Remember that you need to implement actions in your Vuex store
      // store: {

      //   // Call action to hide navigation buttons
      //   showNavigationButtons: false,

      //   // Call "showMovies" action in "categories" module with payload "all"
      //   "categories/showMovies": "all",

      //   // Call action without payload
      //   showNavigationButtons: null,
      // },
    },


    // Optional, per route guards are supported
    // More info: https://next.router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard
    // beforeEnter: (to, from) => {
    //   if (to.props.passUser) {
    //     // Continue navigation
    //     return true;
    //   }

    //   //   // Reject the navigation
    //   //   return false;
    // },
  },
  {
    path: "/browser",
    component: Browser,
  },
  {
    path: "/profile",
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/check']) {
        next({ name: 'login' })
      } else {
        next()
      }
    }
  },
];
const router = createRouter(
  { routes },
  {
    // Optional settings below

    // Set first page to redirect to when there's no page to redirect back to
    routeBackFallbackPath: "/home",



    // // Do something straight before navigation or adjust NS routing settings
    // routeBackCallback: (_to, options) => {
    //   // Do something...
    // },

  }
);
// router.beforeEach(async (to, from) => {
//   // canUserAccess() returns `true` or `false`
//   const canAccess = await canUserAccess(to)
//   if (!canAccess) return '/login'
// })
export default router;


