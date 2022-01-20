import Vue from "nativescript-vue";
import { createRouter } from "nativescript-vue-router-extended";
import Home from '../components/Home';
import Browser from '../components/Browse';
import Profile from '../components/Profile';
import Login from '../components/Login';
import Search from '../components/Search';
import Featured from '../components/Featured';
import store from '../store';
const one = 1;
const routes = [
  {
    path: "/home",
    component: Home,

    // Optional
    meta: {
      auth: false
    }


    // Optional, per route guards are supported
    // More info: https://next.router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard

  },
  {
    path: "/browse",
    component: Browser,
    meta: {
      auth: false,
    }
  },
  {
    path: "/search",
    component: Search,
    meta: {
      auth: false,
    }
  },
  {
    path: "/featured",
    component: Featured,
    meta: {
      auth: false,
    }
  },
  {
    path: "/login",
    component: Login,
    name: 'login',
    meta: {
      auth: false
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      auth: true
    },
    beforeEnter: (to, from) => {

        if (store.state.auth.isLoggedIn === true) {
          console.log(store.state.auth.isLoggedIn);
          console.log(store.state.auth.token);
          return true;
        }

        //   // Reject the navigation
          else return '/login';
      },
      // const canAccess = this.$store.state.auth.isLoggedIn;


    // },
  },
];
const router = createRouter(
  { routes, store },
  {
    // Optional settings below

    // Set first page to redirect to when there's no page to redirect back to
    routeBackFallbackPath: "/login",



    // // Do something straight before navigation or adjust NS routing settings
    // routeBackCallback: (_to, options) => {
    //   // Do something...
    // },

  }
);

export default router;



