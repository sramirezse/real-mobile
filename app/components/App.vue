<template lang="html">
    <RadSideDrawer style="padding-top:100px"  backgroundSpanUnderStatusBar="false" ref="drawer" drawerLocation="Left" gesturesEnabled="true" :drawerTransition="transition">
        <StackLayout ~drawerContent backgroundColor="#ffffff" >
            <DrawerContent ref="fetchUser" />
        </StackLayout>
        <Frame ~mainContent ref="drawerMainContent">
            <Home :fetchUser="fetchUser" />
        </Frame>
    </RadSideDrawer>
</template>

<script>
import DrawerContent from "./DrawerContent";
import Home from "./Home";
import { SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import * as geolocation from "@nativescript/geolocation";
import { Accuracy } from "@nativescript/core/ui/enums";
// Utils.Accuracy;

export default {
  data() {
    return {
      transition: new SlideInOnTopTransition(),
      lat: "",
      lon: "",
      speed: "",
      addr: "",
    };
  },

  components: {
    DrawerContent,
    Home,
  },
  methods: {
    fetchUser() {
      this.getLocation();
    },
    getLocation() {
      console.log('----GET LOCATION----');
      geolocation
        .getCurrentLocation({
          maximumAge: 5000,
          timeout: 20000,
        })
        .then((res) => {
          console.log('----GET LOCATION----res---', res);
          this.lat = res.latitude;
          this.lon = res.longitude;
          this.speed = res.speed;
          // get the address (REQUIRES YOUR OWN GOOGLE MAP API KEY!)
          fetch(
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
              res.latitude +
              "," +
              res.longitude +
              "&key=YOUR-API-KEY"
          )
            .then((response) => response.json())
            .then((r) => {
              this.addr = r.results[0].formatted_address;
            });
        });
    },
  },
  watch: {},
  mounted() {
    this.fetchUser();
    this.$store.dispatch("auth/fetchUser");
    geolocation.enableLocationRequest();
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
