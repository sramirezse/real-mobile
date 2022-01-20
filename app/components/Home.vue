<template>
  <!-- <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true"> -->
  <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true" overfloSafeArea="true">

    <GridLayout class="page__content">
      <DockLayout class="screen" stretchLastChild="true">
        <GridLayout
          class="bottom-tabs"
          columns="*,*,*,*"
          height="100"
          orientation="horizontal"
          dock="bottom"
        >
          <Image row="0" col="0" height="20" src="~/assets/images/home.png" />
          <Image
            row="0"
            col="1"
            height="20"
            src="~/assets/images/explore.png"

          />
          <Image row="0" col="2" height="20" src="~/assets/images/saved.png" />
          <Image
            row="0"
            col="3"
            height="20"
            src="~/assets/images/contacts.png"
          />
        </GridLayout>
        <ScrollView dock="top">
          <StackLayout orientation="vertical">
            <GridLayout class="header" rows="auto" columns="*,auto,auto">
              <GridLayout columns="50, *">

                <Label
                  class="fas"
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
                src="~/assets/images/header-cart.png"
                verticalAlignment="middle"
                marginRight="10"
                row="0"
                col="2"
                height="14"
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
                height="205"
                orientation="horizontal"
                loaded="disableScrollBar"
              >
                <StackLayout orientation="horizontal">
                  <StackLayout
                    class="first-child room"
                    width="138"
                    @tap="showDetails()"
                    pageTransition="fade"
                  >

                    <Image height="120" src="~/assets/images/room1.jpg" />
                    <StackLayout
                      height="14"
                      class="stars"
                      orientation="horizontal"
                      style="padding-left: 15px;"
                    >

                     <Image  src.decode="font://&#11088;" />
                     <Image  src.decode="font://&#11088;" />
                     <Image  src.decode="font://&#11088;" />
                     <Image  src.decode="font://&#11088;" />
                     <Image  src.decode="font://&#11088;" />
                    </StackLayout>
                    <Label style="padding-left: 10px" class="h2" height="31" text="$ 300"></Label>
                    <Label style="padding-left: 10px" height="31" text="Nombre de la propiedad"></Label>
                  </StackLayout>



                  <StackLayout
                    class="first-child room"
                    width="138"
                    @tap="showDetails()"
                    pageTransition="fade"
                  >

                    <Image height="120" src="~/assets/images/room1.jpg" />
                    <StackLayout
                      height="14"
                      class="stars"
                      orientation="horizontal"
                      style="padding-left: 15px;"
                    >

                     <Image  src.decode="font://&#11088;" />
                     <Image  src.decode="font://&#11088;" />
                     <Image  src.decode="font://&#11088;" />
                     <Image  src.decode="font://&#11088;" />
                     <Image  src.decode="font://&#11088;" />
                    </StackLayout>
                    <Label class="h2" height="31" text="$ 300"></Label>
                    <Label height="31" text="Nombre de la propiedad"></Label>
                  </StackLayout>

                </StackLayout>
              </ScrollView>
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
                  text="See all"
                  row="0"
                  col="1"
                  colspan="2"
                ></Label>
              </GridLayout>
              <ScrollView class="rooms" height="185" orientation="horizontal">
                <StackLayout orientation="horizontal">
                  <StackLayout class="first-child room" width="138">
                    <Image height="138" src="~/assets/images/room2.jpg" />
                    <StackLayout
                      height="9.71"
                      class="stars"
                      orientation="horizontal"
                    >
                    <Image src.decode="font://&#xf004;" class="fas" />

                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-empty.png"
                      />
                    </StackLayout>
                    <Label class="h2" height="21" text="$ 300"></Label>
                  </StackLayout>
                  <StackLayout class="room" width="138">
                    <Image height="138" src="~/assets/images/room1.jpg" />
                    <StackLayout
                      height="9.71"
                      class="stars"
                      orientation="horizontal"
                    >
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                    </StackLayout>
                    <Label class="h2" height="21" text="$ 300"></Label>
                  </StackLayout>
                  <StackLayout class="room" width="138">
                    <Image height="138" src="~/assets/images/room3.jpg" />
                    <StackLayout
                      height="9.71"
                      class="stars"
                      orientation="horizontal"
                    >
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-filled.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-empty.png"
                      />
                      <Image
                        width="10.28"
                        src="~/assets/images/star-empty.png"
                      />
                    </StackLayout>
                    <Label class="h2" height="21" text="$ 300"></Label>
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

export default {
  computed: {},
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Home");
    // console.log('user', this.$store.state.auth.user);
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
    showDetails() {
        console.log('show details', this.$store.state.auth.user);
      this.$navigateTo(Details, {
        animated: true,
        transition: {
          name: "fade",
          duration: 380,
          curve: "easeIn",
        },
      });
    },
    async onDrawerButtonTap() {
      utils.showDrawer();
      // axios.post('https://realstate.kratoxxsoft.com/api/auth/login', this.form).then((res)=>{console.log(res)}).catch((e)=>{console.log(e)});
      // console.log(this.$store.state.auth.user, 'desde home');
    },
    async onButtonTap() {

    },
    async fetchProperties(){
      await this.$store.dispatch('property/index', {
        params: {
          page: 1,
          per_page: 10,
          limit: 20,
          offset:0,
          search: ''
        },
      }).then(res => {
        console.log(res);
      }).catch(e => {
        console.log(e);
      });
    }

  },
};
</script>

<style scoped>
@import url("../assets/css/home.css");
</style>
