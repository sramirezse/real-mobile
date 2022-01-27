<template>
  <ActionBar class="action-bar" :style="headerStyle">
    <NavigationButton visibility="hidden" />

    <GridLayout class="header" rows="auto" columns="*,auto,auto">
      <GridLayout columns="50, *">
        <Label
          v-show="burguerIcon"
          class="fas"
          style="font-size: 20; font-weight: bold"
          text.decode="&#xf0c9;"
          @tap="onDrawerButtonTap"
        />
          <Label v-show="backIcon" class="fas" style="font-size: 30" text.decode="&#8672;" @tap="onDrawerButtonBack"/>
      </GridLayout>
      <Image
        src="~/assets/images/search.png"
        verticalAlignment="center"
        marginRight="25"
        row="0"
        col="1"
        height="22"
        @tap="$routeTo('/search')"
      />
      <Image
        src="~/assets/images/houses.png"
        verticalAlignment="middle"
        marginRight="10"
        row="0"
        col="2"
        height="30"
      />

    </GridLayout>
  </ActionBar>
</template>

<script>
import * as utils from "~/shared/utils";

export default {
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
    onDrawerButtonBack() {
        // utils.showDrawer();
        this.$routeBack();
      }
  },
  mounted(){
    console.log('backgroundcolor',this.backgroundColor)
    console.log('backIcon',this.backIcon)
    console.log('burguerIcon',this.burguerIcon)
    console.log('housesIcon',this.housesIcon)
    console.log('searchIcon',this.searchIcon)
  },
  data() {
    return {};
  },
  props:{
    backgroundColor: {
      type: String,
      default: "#ffffff"
    },
    color: {
      type: String,
      default: "#000000"
    },
    searchIcon:{
      type: Boolean,
      default: true
    },
    housesIcon:{
      type: Boolean,
      default: true
    },
    burguerIcon:{
      type: Boolean,
      default: true
    },
    backIcon:{
      type: Boolean,
      default: false
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    headerStyle() {
      return {
        "background-color": this.backgroundColor ? this.backgroundColor : "#ffffff",
        "color": this.color ? this.color : "#000000",
      };
    },
  },
};
</script>

<style lang="scss" scoped>

</style>>

</style>
