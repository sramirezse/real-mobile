<template>
  <!-- <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true"> -->
  <Page
    class="page"
    actionBarHidden="true"
    backgroundSpanUnderStatusBar="true"
    overfloSafeArea="true"
  >
    <GridLayout class="page__content">
      <DockLayout class="screen" stretchLastChild="true">
        <ScrollView dock="top">
          <StackLayout orientation="vertical">
            <GridLayout class="header" rows="auto" columns="*,auto,auto">
              <GridLayout columns="50, *">
                <Label
                  class="fas"
                  style="font-size: 20; font-weight: bold"
                  text.decode="&#xf0c9;"
                  @tap="onDrawerButtonTap"
                />
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
export default {
  components: { Rent },
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
