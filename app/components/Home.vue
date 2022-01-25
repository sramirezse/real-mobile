<template>
  <!-- <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true"> -->
  <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true" overfloSafeArea="true">

    <GridLayout class="page__content">
      <DockLayout class="screen" stretchLastChild="true">

        <ScrollView dock="top">
          <StackLayout orientation="vertical">
            <GridLayout class="header" rows="auto" columns="*,auto,auto">
              <GridLayout columns="50, *">

                <Label
                  class="fas"
                  style="font-size: 20; font-weight: bold;"
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
              <GridLayout
                class="room-list-header"
                rows="auto"
                columns="*,auto"
                height="30"
              >
                <Label
                  class="h2"
                  text="En renta"
                  row="0"
                  col="0"
                  colspan="6"
                ></Label>
                <Label
                  class="see-all"
                  text="Mostrar todo"
                  row="0"
                  col="1"
                  colspan="2"
                ></Label>
              </GridLayout>
              <ScrollView
                class="rooms"
                height="180"
                orientation="horizontal"
                loaded="disableScrollBar"
                @scroll="horizontalPercentFunc($event)"

              >
                <StackLayout orientation="horizontal" >
                  <StackLayout
                    class="first-child room"
                    width="135"
                    @tap="showDetails(item)"
                    pageTransition="fade"
                    v-for="item in items" :key="item.id"
                  >

                    <Image style="border-radius: 10" height="100" :src="item.image ? item.image: 'https://cdn.pixabay.com/photo/2018/11/10/22/57/mountain-3807667_960_720.jpg'" />
                    <StackLayout
                      height="11"
                      class="stars"
                      orientation="horizontal"
                      style="padding-left: 15px;"
                    >

                     <Image height="11"  src.decode="font://&#11088;" />
                     <Image height="11"  src.decode="font://&#11088;" />
                     <Image height="11"  src.decode="font://&#11088;" />
                     <Image height="11"  src.decode="font://&#11088;" />
                     <Image height="11"  src.decode="font://&#11088;" />
                    </StackLayout>
                    <Label style="padding-left: 10px" class="h3" height="23" :text="'$'+ numberFormat(item.price)+'.00'"></Label>
                    <Label style="padding-left: 10px" height="20" :text="item.address"></Label>
                  </StackLayout>

                </StackLayout>
              </ScrollView>

            </StackLayout>
          </StackLayout>
        </ScrollView>
      </DockLayout>
    </GridLayout>
  </Page>
</template>
<script>
import Details from "./Details";
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";
import { mapState } from "vuex";
import NumberFormat from "../mixins/numberFormat";
import eventScroll from "../mixins/eventScroll";
import propertyMixin from "../mixins/property";
export default {
  computed: {},
  mixins: [NumberFormat, eventScroll,propertyMixin],
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Home");
    this.fetchProperties();
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
  props:{
    fetchUser: Function
  },
  methods: {
    onButtonTap() {},
    showDetails(item) {
        console.log('show details', this.$store.state.auth.user);
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
    async onButtonTap() {

    },


  },
};
</script>

<style scoped>
@import url("../assets/css/home.css");
</style>
