<template>
  <!-- <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true"> -->
  <Page
    class="page"

    backgroundSpanUnderStatusBar="true"
    overfloSafeArea="true"
  >
    <Header :burguerIcon="true" :backIcon="false"></Header>
    <GridLayout class="page__content">
      <DockLayout class="screen" stretchLastChild="true">
        <ScrollView dock="top">
          <StackLayout orientation="vertical">
            <GridLayout class="tabs" columns="*,*,*,*,*" height="30">
              <Label class="active" text="Destacadas" row="0" col="0"></Label>
              <Label text="En renta" row="0" col="1"></Label>
              <Label text="En venta" row="0" col="2"></Label>
              <Label text="Piscina" row="0" col="3"></Label>
              <Label text="Terraza" row="0" col="4"></Label>
            </GridLayout>
            <StackLayout class="content">
              <Label class="h1" text="Propiedades destacadas"></Label>

              <Rent></Rent>
            </StackLayout>
          </StackLayout>
        </ScrollView>
      </DockLayout>
    </GridLayout>
  </Page>
</template>
<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";
import { mapState } from "vuex";
import Rent from "./Home/Rent";
import NumberFormat from "../mixins/numberFormat";
import eventScroll from "../mixins/eventScroll";
import propertyMixin from "../mixins/property";
import Header from "./Common/Header";

export default {
  components: { Rent, Header },
  computed: {},
  mixins: [NumberFormat, eventScroll, propertyMixin],
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Home");
  },
  data() {
    return {
      form: {
        email: "admin@admin.com",
        password: "12345678",
        remember_me: true,
      },
    };
  },
  props: {
    fetchUser: Function,
  },
  methods: {
    onButtonTap() {},
    showDetails(item) {
      console.log("show details", this.$store.state.auth.user);
      this.$navigateTo(Details, {
        animated: true,
        transition: {
          name: "slide",
          duration: 200,
          curve: "easeIn",
        },
        props: {
          item: item,
        },
      });
    },
    async onDrawerButtonTap() {
      utils.showDrawer();
    },
    async onButtonTap() {},
  },
};
</script>

<style scoped>
@import url("../assets/css/home.css");
</style>
